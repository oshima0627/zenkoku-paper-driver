"use client";

import { useState, useRef, useCallback, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Bot,
  Calendar,
  CheckCircle2,
  RotateCcw,
  ChevronRight,
  Send,
} from "lucide-react";

/* ================================================================
   データ定義
   ================================================================ */

const SCENARIOS = [
  {
    id: "list",
    label: "予定一覧",
    userMessage: "明日の予定",
    aiAnalysis: {
      operation: "予定の一覧取得",
      items: [
        { label: "期間", value: "4/11(金)" },
        { label: "対象", value: "すべてのカレンダー" },
      ],
    },
    calendarAction: {
      type: "一覧取得",
      event: "4/11 の予定一覧",
      time: "4/11(金) 〜 4/11(金)",
    },
    botReply:
      "📅 予定一覧\n📆 4/11(金) 〜 4/11(金)\n\n・4月11日 10:00~12:00\n  梅田 山田様 初回カウンセリング\n・4月11日 13:00~14:30\n  難波 佐藤様 フォローアップ面談\n・4月11日 15:00~16:00\n  オンライン 鈴木様 契約更新MTG",
  },
  {
    id: "create",
    label: "予定を登録",
    userMessage: "4/14 10:00-12:00 山田様 初回カウンセリングを登録",
    aiAnalysis: {
      operation: "予定の登録",
      items: [
        { label: "日時", value: "4/14 10:00〜12:00" },
        { label: "タイトル", value: "山田様 初回カウンセリング" },
      ],
    },
    calendarAction: {
      type: "新規追加",
      event: "山田様 初回カウンセリング",
      time: "4月14日 10:00 – 12:00",
    },
    botReply:
      "✅ 予定を追加しました!\n\n📌 山田様 初回カウンセリング\n🕐 4月14日 10:00~12:00",
  },
  {
    id: "update",
    label: "予定を変更",
    userMessage: "4/14 山田様の予定を1時間遅くして",
    aiAnalysis: {
      operation: "予定の変更",
      items: [
        { label: "対象", value: "4/14 山田様 初回カウンセリング" },
        { label: "変更内容", value: "開始・終了を1時間後ろにずらす" },
      ],
    },
    calendarAction: {
      type: "更新",
      event: "山田様 初回カウンセリング",
      time: "4/14 10:00~12:00 → 11:00~13:00",
    },
    botReply:
      "✏️ 予定を変更しました。\n\n📌 山田様 初回カウンセリング\n🕐 4月14日 11:00~13:00",
  },
  {
    id: "delete",
    label: "予定を削除",
    userMessage: "4/14 山田様の予定を削除",
    aiAnalysis: {
      operation: "予定の削除",
      items: [
        { label: "対象", value: "4/14 山田様 初回カウンセリング" },
        { label: "操作", value: "削除" },
      ],
    },
    calendarAction: {
      type: "削除",
      event: "梅田 山田様 初回カウンセリング",
      time: "4月14日 → 削除",
    },
    botReply: "🗑️ 「梅田 山田様 初回カウンセリング」を削除しました。",
  },
  {
    id: "check",
    label: "予定照合",
    userMessage: "佐藤様\n①4/14 10:00\n②4/16 14:00",
    aiAnalysis: {
      operation: "予定の照合",
      items: [
        { label: "顧客名", value: "佐藤様" },
        { label: "照合対象", value: "2件(4/14, 4/16)" },
      ],
    },
    calendarAction: {
      type: "照合",
      event: "佐藤様の予定 2件",
      time: "4/14 10:00, 4/16 14:00",
    },
    botReply:
      "【予定照合結果】佐藤様\n\n✅① 4/14(月) 10:00〜12:00\n  梅田 佐藤様 フォローアップ面談\n✅② 4/16(水) 14:00〜16:00\n  難波 佐藤様 契約相談\n\n2/2件 登録済み",
  },
  {
    id: "free_time",
    label: "空き時間",
    userMessage: "来週の空いてる時間を教えて",
    aiAnalysis: {
      operation: "空き時間の検索",
      items: [
        { label: "期間", value: "来週(月〜水)" },
        { label: "営業時間", value: "09:00〜18:00" },
      ],
    },
    calendarAction: {
      type: "空き検索",
      event: "来週の空き時間",
      time: "09:00〜18:00 で検索",
    },
    botReply:
      "🕐 空き時間一覧(09:00~18:00)\n\n4/14(月) 09:00~10:00, 12:00~14:00\n4/15(火) 09:00~18:00 全て空き\n4/16(水) 空きなし\n4/17(木) 10:00~12:00, 15:00~18:00\n4/18(金) 09:00~11:00, 16:00~18:00",
  },
  {
    id: "duplicate",
    label: "予定を複製",
    userMessage: "4/11の鈴木様の契約更新MTGを4/18にも複製して",
    aiAnalysis: {
      operation: "予定の複製",
      items: [
        { label: "元の予定", value: "4/11 鈴木様 契約更新MTG" },
        { label: "コピー先", value: "4/18" },
      ],
    },
    calendarAction: {
      type: "複製",
      event: "鈴木様 契約更新MTG",
      time: "4月18日 15:00 – 16:00",
    },
    botReply:
      "📋 予定を1件複製しました!\n\n📌 鈴木様 契約更新MTG\n🕐 4月18日 15:00~16:00",
  },
];

type Scenario = (typeof SCENARIOS)[number];

const STEPS = [
  { label: "LINE送信", icon: MessageCircle, color: "#06C755" },
  { label: "AI解析", icon: Bot, color: "#0284c7" },
  { label: "カレンダー操作", icon: Calendar, color: "#6366f1" },
  { label: "LINE返信", icon: CheckCircle2, color: "#06C755" },
];

/* ================================================================
   サブコンポーネント
   ================================================================ */

function TypingDots() {
  return (
    <div className="flex items-center gap-1 bg-white px-4 py-3 rounded-2xl rounded-tl-sm w-fit shadow-sm">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-2 h-2 rounded-full bg-slate-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function LineChatMockup({ step, scenario }: { step: number; scenario: Scenario }) {
  return (
    <div className="mx-auto w-full max-w-xs">
      <div className="rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden bg-white">
        <div className="bg-[#06C755] px-5 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-tight">予定管理Bot</p>
            <p className="text-white/70 text-[10px]">LINE</p>
          </div>
        </div>

        <div className="bg-[#8caab9]/10 px-4 py-3 md:py-5 min-h-[200px] md:min-h-[280px] flex flex-col justify-end gap-2 md:gap-3">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key="user-msg"
                className="flex justify-end"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#06C755] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm whitespace-pre-line">
                  {scenario.userMessage}
                </div>
              </motion.div>
            )}

            {(step === 2 || step === 3) && (
              <motion.div
                key="typing"
                className="flex items-end gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#06C755]" />
                </div>
                <TypingDots />
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                key="bot-reply"
                className="flex items-end gap-2"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#06C755]" />
                </div>
                <div className="bg-white text-slate-700 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm whitespace-pre-line">
                  {scenario.botReply}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step === 0 && (
            <div className="text-center text-slate-400 text-sm py-8">
              <Send className="w-6 h-6 mx-auto mb-2 text-slate-300" />
              メッセージを送信してみましょう
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepProgress({
  current,
  onStepClick,
}: {
  current: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div className="flex items-center justify-center">
      {STEPS.map((s, i) => {
        const active = current >= i + 1;
        const Icon = s.icon;
        return (
          <Fragment key={i}>
            {i > 0 && (
              <div
                className={`h-0.5 w-6 sm:w-12 md:w-16 transition-colors duration-300 ${
                  current > i ? "bg-sky-400" : "bg-slate-200"
                }`}
              />
            )}
            <button
              type="button"
              onClick={() => onStepClick(i + 1)}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  active
                    ? "text-white shadow-md"
                    : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                }`}
                style={active ? { backgroundColor: s.color } : undefined}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${
                  active ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {s.label}
              </span>
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}

function InfoCard({
  title,
  icon: Icon,
  color,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${color}`} />
        <h4 className="font-bold text-slate-800">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
}

function StepInfoPanel({ step, scenario }: { step: number; scenario: Scenario }) {
  return (
    <div className="flex flex-col justify-center min-h-[200px]">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <InfoCard key="s0" title="デモを開始" icon={Send} color="text-slate-400">
            <p className="text-slate-500 text-sm leading-relaxed">
              シナリオを選んで「LINEで送信」をクリックしてください。
              <br />
              自動化がどのように動くか、ステップごとに確認できます。
            </p>
          </InfoCard>
        )}

        {step === 1 && (
          <InfoCard
            key="s1"
            title="STEP 1 : LINE送信"
            icon={MessageCircle}
            color="text-[#06C755]"
          >
            <p className="text-slate-500 text-sm mb-3">
              ユーザーがLINEで自然な言葉でメッセージを送信しました。
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <p className="text-sm text-green-800 font-medium">送信メッセージ</p>
              <p className="text-sm text-green-700 mt-1 whitespace-pre-line">
                {scenario.userMessage}
              </p>
            </div>
          </InfoCard>
        )}

        {step === 2 && (
          <InfoCard key="s2" title="STEP 2 : AI解析" icon={Bot} color="text-sky-600">
            <p className="text-slate-500 text-sm mb-3">
              Claude AIがメッセージを解析し、操作内容を判断しました。
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-sky-800">
                操作 : {scenario.aiAnalysis.operation}
              </p>
              {scenario.aiAnalysis.items.map((item) => (
                <div key={item.label} className="flex gap-2 text-sm">
                  <span className="text-sky-500 font-medium min-w-[5rem]">
                    {item.label}:
                  </span>
                  <span className="text-sky-800">{item.value}</span>
                </div>
              ))}
            </div>
          </InfoCard>
        )}

        {step === 3 && (
          <InfoCard
            key="s3"
            title="STEP 3 : カレンダー操作"
            icon={Calendar}
            color="text-indigo-500"
          >
            <p className="text-slate-500 text-sm mb-3">
              n8n経由でGoogle Calendar APIを実行しています。
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200 text-indigo-700">
                  {scenario.calendarAction.type}
                </span>
              </div>
              <p className="text-sm font-semibold text-indigo-800">
                {scenario.calendarAction.event}
              </p>
              <p className="text-sm text-indigo-600 mt-0.5">
                {scenario.calendarAction.time}
              </p>
            </div>
          </InfoCard>
        )}

        {step === 4 && (
          <InfoCard
            key="s4"
            title="STEP 4 : LINE返信"
            icon={CheckCircle2}
            color="text-[#06C755]"
          >
            <p className="text-slate-500 text-sm mb-3">
              操作結果がLINEに自動返信されました。
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <p className="text-sm text-green-800 font-medium">自動返信完了</p>
              <p className="text-sm text-green-700 mt-1 whitespace-pre-line">
                {scenario.botReply}
              </p>
            </div>
            <p className="text-slate-400 text-xs mt-3">
              ※ 実際の運用では数秒以内に自動で完了します
            </p>
          </InfoCard>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================
   メインコンポーネント
   ================================================================ */

export default function AutomationDemoSection() {
  const [step, setStep] = useState(0);
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const scenario = SCENARIOS[scenarioIdx];

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const play = useCallback(() => {
    clearTimers();
    setRunning(true);
    setStep(1);
    const delays = [3000, 3000, 3000];
    delays.forEach((d, i) => {
      const t = setTimeout(
        () => {
          setStep(i + 2);
          if (i === delays.length - 1) setRunning(false);
        },
        delays.slice(0, i + 1).reduce((a, b) => a + b, 0),
      );
      timersRef.current.push(t);
    });
  }, [clearTimers]);

  const goToStep = useCallback(
    (target: number) => {
      clearTimers();
      setRunning(false);
      setStep(target);
    },
    [clearTimers],
  );

  const changeScenario = useCallback(
    (i: number) => {
      clearTimers();
      setRunning(false);
      setScenarioIdx(i);
      setStep(0);
    },
    [clearTimers],
  );

  return (
    <section id="automation-demo" className="py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-accent)] text-xs font-semibold mb-4">
            スクールサポートAI事業
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-3">
            自動化の流れ
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)]">
            ボタンを押して、自動化の流れをステップごとに確認できます。
          </p>
        </motion.div>

        {/* シナリオ選択タブ */}
        <motion.div
          className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-1 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => changeScenario(i)}
              className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-200 whitespace-nowrap shrink-0 ${
                scenarioIdx === i
                  ? "bg-[#06C755] text-white border-transparent shadow-sm"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* ステッププログレスバー */}
        <StepProgress current={step} onStepClick={goToStep} />

        {/* メインコンテンツ(チャット + 情報パネル) */}
        <div
          key={scenario.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mt-6 md:mt-10"
        >
          <LineChatMockup step={step} scenario={scenario} />
          <div className="hidden lg:block">
            <StepInfoPanel step={step} scenario={scenario} />
          </div>
        </div>

        {/* アクションボタン */}
        <div className="text-center mt-6 md:mt-10">
          {step === 0 ? (
            <button
              onClick={play}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#06C755" }}
            >
              LINEで送信
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : running ? (
            <span
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-sm opacity-70"
              style={{ backgroundColor: STEPS[step - 1]?.color ?? "#06C755" }}
            >
              実行中...
            </span>
          ) : (
            <button
              onClick={play}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm border-2 border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              もう一度試す
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
