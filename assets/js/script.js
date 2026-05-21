const allQuestionBanks = {
  decision: {
    types: ["analytical", "emotional", "careful", "bold"],
    typeNames: {
      analytical: "🧠 تحليلي",
      emotional: "💖 عاطفي",
      careful: "🪞 حذر",
      bold: "🔥 جريء",
    },
    typeColors: {
      analytical: "#2193b0",
      emotional: "#ff416c",
      careful: "#f7971e",
      bold: "#6dd5ed",
    },
    personalities: {
      analytical: {
        title: "🧠 شخصيتك في اتخاذ القرار: تحليلية منطقية",
        desc: "أنت إنسان يعتمد على العقل والتحليل قبل أي قرار.\n\nتجمع المعلومات، تقارن الخيارات، وتفكر بعمق.\n\n✅ نقاط قوتك:\n• قراراتك غالبًا صائبة ومدروسة\n• الناس تثق برأيك\n• تتجنب الأخطاء العاطفية\n\n⚠️ انتبه من:\n• المبالغة في التحليل قد تأخرك\n• أحيانًا القلب يعرف قبل العقل",
        color: "#2193b0",
      },
      emotional: {
        title: "💖 شخصيتك في اتخاذ القرار: عاطفية حدسية",
        desc: "أنت إنسان يقوده قلبه وإحساسه الداخلي.\n\nعندك ذكاء عاطفي عالي وحدس قوي.\n\n✅ نقاط قوتك:\n• تفهم الناس ومشاعرهم بسرعة\n• قراراتك تخلّيك مرتاح نفسيًا\n• حدسك غالبًا صحيح\n\n⚠️ انتبه من:\n• المشاعر أحيانًا تضلّلك\n• خذ وقت للتفكير المنطقي",
        color: "#ff416c",
      },
      careful: {
        title: "🪞 شخصيتك في اتخاذ القرار: حذرة متأنية",
        desc: "أنت إنسان يفكر كثيرًا ويخاف من الخطأ.\n\nتحب الأمان والاستقرار.\n\n✅ نقاط قوتك:\n• تتجنب كثير من المشاكل\n• قراراتك مدروسة\n• الناس تشوفك عاقل ومسؤول\n\n⚠️ انتبه من:\n• التردد الزائد يضيع فرص\n• ثق بنفسك أكثر",
        color: "#f7971e",
      },
      bold: {
        title: "🔥 شخصيتك في اتخاذ القرار: جريئة مغامرة",
        desc: "أنت إنسان ما يخاف من القرارات الصعبة.\n\nتتصرف بسرعة وثقة.\n\n✅ نقاط قوتك:\n• سرعة في اغتنام الفرص\n• شجاعة يتمناها كثيرين\n• ما تندم لأنك تتقبل النتائج\n\n⚠️ انتبه من:\n• التسرع أحيانًا يوقعك بمشاكل\n• فكر شوي قبل القرارات الكبيرة",
        color: "#6dd5ed",
      },
    },
    questions: [
      {
        q: "عندما تواجه قرارًا مصيريًا:",
        options: [
          { text: "جمع أكبر قدر من المعلومات", type: "analytical" },
          { text: "الاستماع لشعورك الداخلي", type: "emotional" },
          { text: "تأجيل القرار خوفًا من الخطأ", type: "careful" },
          { text: "اتخاذ القرار بسرعة", type: "bold" },
        ],
      },
      {
        q: "إذا اختلف عقلك وقلبك:",
        options: [
          { text: "اتباع المنطق دائمًا", type: "analytical" },
          { text: "اتباع إحساسك", type: "emotional" },
          { text: "التردد بين الاثنين", type: "careful" },
          { text: "اختيار الأكثر جرأة", type: "bold" },
        ],
      },
      {
        q: "عند ضغط الوقت:",
        options: [
          { text: "تنظم أفكارك وتحلل", type: "analytical" },
          { text: "تتصرف حسب الإحساس", type: "emotional" },
          { text: "تشعر بالارتباك", type: "careful" },
          { text: "تتصرف فورًا بثقة", type: "bold" },
        ],
      },
      {
        q: "عندما تخطئ في قرار:",
        options: [
          { text: "تحلل السبب لتتعلم", type: "analytical" },
          { text: "تشعر بالندم لفترة", type: "emotional" },
          { text: "تخاف من قرارات جديدة", type: "careful" },
          { text: "تعتبره تجربة وتمضي", type: "bold" },
        ],
      },
      {
        q: "قبل اختيار شيء مهم:",
        options: [
          { text: "تكتب إيجابيات وسلبيات", type: "analytical" },
          { text: "تسأل نفسك: ماذا أشعر؟", type: "emotional" },
          { text: "تسأل الآخرين وتنتظر", type: "careful" },
          { text: "تختار أول خيار مناسب", type: "bold" },
        ],
      },
      {
        q: "صديقك طلب نصيحتك بقرار صعب:",
        options: [
          { text: "تحلل معه كل الخيارات", type: "analytical" },
          { text: "تحاول تفهم مشاعره أولاً", type: "emotional" },
          { text: "تخاف تنصحه غلط", type: "careful" },
          { text: "تعطيه رأيك المباشر", type: "bold" },
        ],
      },
      {
        q: "عرض عمل ممتاز بمدينة بعيدة:",
        options: [
          { text: "تدرس التفاصيل المالية", type: "analytical" },
          { text: "تفكر بتأثيره على علاقاتك", type: "emotional" },
          { text: "تخاف من التغيير", type: "careful" },
          { text: "تعتبرها مغامرة وتوافق", type: "bold" },
        ],
      },
      {
        q: "في مطعم والقائمة طويلة:",
        options: [
          { text: "تقرأ كل الخيارات وتقارن", type: "analytical" },
          { text: "تختار اللي يفتح نفسك", type: "emotional" },
          { text: "تسأل النادل أو تقلد صاحبك", type: "careful" },
          { text: "تختار أول شيء يلفت نظرك", type: "bold" },
        ],
      },
      {
        q: "مشروع مضمون بربح قليل أو مخاطرة بربح كبير:",
        options: [
          { text: "تحسب الأرقام بدقة", type: "analytical" },
          { text: "تختار اللي تحس بشغف فيه", type: "emotional" },
          { text: "تختار المضمون للأمان", type: "careful" },
          { text: "تختار المخاطرة", type: "bold" },
        ],
      },
      {
        q: "بعد ما تاخذ قرار مهم:",
        options: [
          { text: "مرتاح لأنك فكرت منطقيًا", type: "analytical" },
          { text: "قلق على مشاعر الآخرين", type: "emotional" },
          { text: "متوتر وتتمنى لو ما قررت", type: "careful" },
          { text: "واثق مهما كانت النتيجة", type: "bold" },
        ],
      },
    ],
  },
  love: {
    types: ["romantic", "loyal", "independent", "passionate"],
    typeNames: {
      romantic: "🌹 رومانسي",
      loyal: "🤝 وفي",
      independent: "🦋 مستقل",
      passionate: "🔥 عاشق",
    },
    typeColors: {
      romantic: "#ff6b9d",
      loyal: "#4ecdc4",
      independent: "#a8e6cf",
      passionate: "#ff416c",
    },
    personalities: {
      romantic: {
        title: "🌹 أسلوبك في الحب: رومانسي حالم",
        desc: "أنت إنسان يؤمن بالحب الكبير والتفاصيل الجميلة.\n\n✅ نقاط قوتك:\n• تخلق أجواء حب مميزة\n• إبداع في التعبير عن مشاعرك\n• شريكك يحس بالتقدير\n\n⚠️ انتبه من:\n• توقعاتك العالية قد تحبطك\n• الواقع مش دائمًا زي الأفلام",
        color: "#ff6b9d",
      },
      loyal: {
        title: "🤝 أسلوبك في الحب: وفي ومخلص",
        desc: "أنت إنسان إذا حب، حب بصدق وإخلاص.\n\n✅ نقاط قوتك:\n• الناس تثق فيك بشكل كامل\n• علاقاتك طويلة وعميقة\n• تتحمل الصعوبات\n\n⚠️ انتبه من:\n• لا تنسى نفسك وأنت تعطي\n• الوفاء لازم يكون متبادل",
        color: "#4ecdc4",
      },
      independent: {
        title: "🦋 أسلوبك في الحب: مستقل ومتوازن",
        desc: "أنت إنسان يحب بذكاء وتوازن.\n\n✅ نقاط قوتك:\n• علاقاتك صحية ومتوازنة\n• ما تفقد نفسك في الحب\n• تعطي شريكك حرية\n\n⚠️ انتبه من:\n• شريكك يحتاج قرب أكثر أحيانًا\n• التوازن ما يعني البرود",
        color: "#a8e6cf",
      },
      passionate: {
        title: "🔥 أسلوبك في الحب: عاشق ملتهب",
        desc: "أنت إنسان إذا حب، حب بكل كيانه.\n\n✅ نقاط قوتك:\n• حبك صادق وقوي\n• تخلي شريكك يحس بالأمان\n• عاطفتك تملأ الحياة\n\n⚠️ انتبه من:\n• الغيرة الزائدة\n• خلّي عندك حدود صحية",
        color: "#ff416c",
      },
    },
    questions: [
      {
        q: "لما تعجبك شخصية:",
        options: [
          { text: "تكتب رسالة حلوة ومميزة", type: "romantic" },
          { text: "تبني صداقة قوية أولاً", type: "loyal" },
          { text: "تراقب من بعيد وتفكر", type: "independent" },
          { text: "تصارحه/ـها فورًا", type: "passionate" },
        ],
      },
      {
        q: "أكثر شيء يهمك بالعلاقة:",
        options: [
          { text: "اللحظات الرومانسية", type: "romantic" },
          { text: "الثقة والإخلاص", type: "loyal" },
          { text: "احترام المساحة الشخصية", type: "independent" },
          { text: "العاطفة القوية والشغف", type: "passionate" },
        ],
      },
      {
        q: "لو شريكك زعل منك:",
        options: [
          { text: "تجهز مفاجأة رومانسية", type: "romantic" },
          { text: "تجلس وتتكلم بصراحة", type: "loyal" },
          { text: "تعطيه وقت يهدأ", type: "independent" },
          { text: "تروح له فورًا وتعتذر", type: "passionate" },
        ],
      },
      {
        q: "أكثر شيء يجذبك بالشخص:",
        options: [
          { text: "ذوقه ورقته", type: "romantic" },
          { text: "صدقه وأمانته", type: "loyal" },
          { text: "استقلاليته وشخصيته", type: "independent" },
          { text: "طاقته وحماسه", type: "passionate" },
        ],
      },
      {
        q: "تفضل الحب يكون:",
        options: [
          { text: "مليان مفاجآت ولحظات حلوة", type: "romantic" },
          { text: "هادي وعميق ومستقر", type: "loyal" },
          { text: "متوازن فيه مساحة لكل طرف", type: "independent" },
          { text: "ملتهب ومليان مشاعر", type: "passionate" },
        ],
      },
      {
        q: "لو بعدتوا عن بعض فترة:",
        options: [
          { text: "ترسل رسائل حب كل يوم", type: "romantic" },
          { text: "تصبر وتنتظر بثقة", type: "loyal" },
          { text: "تستغل الوقت لنفسك", type: "independent" },
          { text: "تحس ما تقدر تبعد", type: "passionate" },
        ],
      },
      {
        q: "ذكرى علاقتكم:",
        options: [
          { text: "تجهز أجمل سهرة", type: "romantic" },
          { text: "تكتب رسالة صادقة", type: "loyal" },
          { text: "تسوي شيء بسيط ومعنوي", type: "independent" },
          { text: "تخطط لمغامرة جديدة", type: "passionate" },
        ],
      },
      {
        q: "شريكك يمر بوقت صعب:",
        options: [
          { text: "ترسم البسمة على وجهه", type: "romantic" },
          { text: "تكون موجود مهما صار", type: "loyal" },
          { text: "تساعده يلاقي حل عملي", type: "independent" },
          { text: "تحس بألمه كأنه ألمك", type: "passionate" },
        ],
      },
      {
        q: "حد تاني حاول يقرب من شريكك:",
        options: [
          { text: "تثق بشريكك وتتجاهل", type: "romantic" },
          { text: "تتكلم مع شريكك بصراحة", type: "loyal" },
          { text: "تعطي شريكك حرية التصرف", type: "independent" },
          { text: "تغار بقوة وتواجه", type: "passionate" },
        ],
      },
      {
        q: "أجمل هدية لشريكك:",
        options: [
          { text: "رسالة بخط يدك", type: "romantic" },
          { text: "وقتك واهتمامك الكامل", type: "loyal" },
          { text: "شيء يساعده على تطوير نفسه", type: "independent" },
          { text: "مفاجأة كبيرة وغير متوقعة", type: "passionate" },
        ],
      },
    ],
  },
  stress: {
    types: ["calm", "fighter", "avoider", "emotional_stress"],
    typeNames: {
      calm: "🧊 هادئ",
      fighter: "⚔️ مقاتل",
      avoider: "🏃 متجنب",
      emotional_stress: "🌊 عاطفي",
    },
    typeColors: {
      calm: "#4ecdc4",
      fighter: "#ff416c",
      avoider: "#f7971e",
      emotional_stress: "#a8e6cf",
    },
    personalities: {
      calm: {
        title: "🧊 أسلوبك مع الضغط: هادئ ومتماسك",
        desc: "أنت إنسان يحافظ على هدوئه حتى بأصعب اللحظات.\n\n✅ نقاط قوتك:\n• تتصرف بحكمة وقت الأزمات\n• الناس تلجأ لك\n• ما تاخذ قرارات متسرعة\n\n⚠️ انتبه من:\n• كتم المشاعر يتعبك\n• عبّر عن ضغوطك",
        color: "#4ecdc4",
      },
      fighter: {
        title: "⚔️ أسلوبك مع الضغط: مقاتل ومواجه",
        desc: "أنت إنسان يواجه الضغط بقوة وإصرار.\n\n✅ نقاط قوتك:\n• طاقة وتحمل عالي\n• تحل المشاكل بسرعة\n• الصعوبات تقويك\n\n⚠️ انتبه من:\n• لا تنهك نفسك\n• أحيانًا الانسحاب حكمة",
        color: "#ff416c",
      },
      avoider: {
        title: "🏃 أسلوبك مع الضغط: متجنب ومبتعد",
        desc: "أنت إنسان يفضل الابتعاد عن الضغط.\n\n✅ نقاط قوتك:\n• تحافظ على صحتك النفسية\n• ما تدخل بصراعات\n• تعرف متى تبتعد\n\n⚠️ انتبه من:\n• التجنب ما يحل المشكلة\n• واجه مخاوفك شوي شوي",
        color: "#f7971e",
      },
      emotional_stress: {
        title: "🌊 أسلوبك مع الضغط: عاطفي ومتأثر",
        desc: "أنت إنسان يتأثر بالضغط عاطفيًا.\n\n✅ نقاط قوتك:\n• إحساسك العالي يخليك تفهم الآخرين\n• تعبر عن مشاعرك بصراحة\n• صادق مع نفسك\n\n⚠️ انتبه من:\n• لا تخلي الضغط يسيطر\n• تعلم تقنيات الاسترخاء",
        color: "#a8e6cf",
      },
    },
    questions: [
      {
        q: "تحت ضغط شديد بالعمل:",
        options: [
          { text: "تهدأ وتنظم مهامك", type: "calm" },
          { text: "تشتغل بجهد مضاعف", type: "fighter" },
          { text: "تأجل وتسوي شيء ثاني", type: "avoider" },
          { text: "تحس بقلق وتوتر", type: "emotional_stress" },
        ],
      },
      {
        q: "حد قريب سبب لك مشكلة:",
        options: [
          { text: "تتعامل بهدوء وتناقشه", type: "calm" },
          { text: "تواجهه مباشرة", type: "fighter" },
          { text: "تبتعد وتتجاهل", type: "avoider" },
          { text: "تزعل وتحس بخيبة", type: "emotional_stress" },
        ],
      },
      {
        q: "موعد نهائي وما خلّصت:",
        options: [
          { text: "تنظم وقتك وتخلص بهدوء", type: "calm" },
          { text: "تسهر وتكافح", type: "fighter" },
          { text: "تطلب تأجيل", type: "avoider" },
          { text: "تحس بضيق وما تركز", type: "emotional_stress" },
        ],
      },
      {
        q: "موقف محرج قدام الناس:",
        options: [
          { text: "تبتسم وتتعامل بطبيعية", type: "calm" },
          { text: "تضحك وتحوله لمزحة", type: "fighter" },
          { text: "تتمنى الأرض تبلعك", type: "avoider" },
          { text: "وجهك يحمر وتنحرج", type: "emotional_stress" },
        ],
      },
      {
        q: "خسرت شيء مهم:",
        options: [
          { text: "تتقبل وتفكر بالخطوة الجاية", type: "calm" },
          { text: "تحاول تعوضها بسرعة", type: "fighter" },
          { text: "تحاول تنسى الموضوع", type: "avoider" },
          { text: "تحزن وتفكر فيها كثير", type: "emotional_stress" },
        ],
      },
      {
        q: "الناس حولك كلهم متوترين:",
        options: [
          { text: "تكون مصدر الهدوء", type: "calm" },
          { text: "تحاول تحل المشكلة للكل", type: "fighter" },
          { text: "تبتعد عن الجو", type: "avoider" },
          { text: "تتأثر بتوترهم", type: "emotional_stress" },
        ],
      },
      {
        q: "مديرك انتقدك قدام الكل:",
        options: [
          { text: "تتقبل بهدوء", type: "calm" },
          { text: "تدافع عن نفسك", type: "fighter" },
          { text: "تسكت وتبلعها", type: "avoider" },
          { text: "تحس بجرح داخلي", type: "emotional_stress" },
        ],
      },
      {
        q: "مريض وعندك مسؤوليات:",
        options: [
          { text: "تنظم أولوياتك", type: "calm" },
          { text: "تتحامل وتكمل", type: "fighter" },
          { text: "تأجل كل شيء", type: "avoider" },
          { text: "تحس بضعف وتحتاج اهتمام", type: "emotional_stress" },
        ],
      },
      {
        q: "أخبار سيئة فجأة:",
        options: [
          { text: "تاخذ نفس عميق وتفكر", type: "calm" },
          { text: "تدور على حل فورًا", type: "fighter" },
          { text: "تحاول ما تفكر فيها", type: "avoider" },
          { text: "تتأثر بقوة", type: "emotional_stress" },
        ],
      },
      {
        q: "نهاية يوم مليء بالضغوط:",
        options: [
          { text: "تقرأ أو تتأمل", type: "calm" },
          { text: "تخطط لبكرة بحماس", type: "fighter" },
          { text: "تتصفح الجوال وتنسى", type: "avoider" },
          { text: "تحتاج حد يسمعك", type: "emotional_stress" },
        ],
      },
    ],
  },
  confidence: {
    types: ["high_conf", "quiet_conf", "growing_conf", "sensitive_conf"],
    typeNames: {
      high_conf: "👑 واثق",
      quiet_conf: "🎯 هادئ الثقة",
      growing_conf: "🌱 يتطور",
      sensitive_conf: "🦋 حساس",
    },
    typeColors: {
      high_conf: "#ffd700",
      quiet_conf: "#2193b0",
      growing_conf: "#2ecc71",
      sensitive_conf: "#ff6b9d",
    },
    personalities: {
      high_conf: {
        title: "👑 ثقتك بنفسك: عالية وقوية",
        desc: "أنت إنسان واثق من نفسه بشكل واضح.\n\n✅ نقاط قوتك:\n• حضورك قوي ومؤثر\n• ما تتأثر بالسلبية\n• تلهم الآخرين\n\n⚠️ انتبه من:\n• الثقة الزائدة قد تبان غرور\n• اسمع الآخرين أحيانًا",
        color: "#ffd700",
      },
      quiet_conf: {
        title: "🎯 ثقتك بنفسك: هادئة وعميقة",
        desc: "أنت إنسان واثق لكن بهدوء.\n\n✅ نقاط قوتك:\n• ثقتك حقيقية\n• الناس تحترمك\n• متواضع وقوي\n\n⚠️ انتبه من:\n• عبّر عن نفسك أكثر\n• لا تخلي هدوءك يتحول لصمت",
        color: "#2193b0",
      },
      growing_conf: {
        title: "🌱 ثقتك بنفسك: تتطور وتنمو",
        desc: "أنت إنسان يبني ثقته يوم بيوم.\n\n✅ نقاط قوتك:\n• وعي ذاتي عالي\n• تتقبل النقد وتتعلم\n• كل يوم أحسن\n\n⚠️ انتبه من:\n• لا تقارن نفسك بالآخرين\n• أنت أفضل مما تتخيل",
        color: "#2ecc71",
      },
      sensitive_conf: {
        title: "🦋 ثقتك بنفسك: حساسة ومتأثرة",
        desc: "أنت إنسان عنده إمكانيات لكن يتأثر بكلام الناس.\n\n✅ نقاط قوتك:\n• مشاعر عميقة وصادقة\n• تفهم الآخرين\n• إبداعك يظهر بالأمان\n\n⚠️ انتبه من:\n• كلام الناس مش دائمًا صحيح\n• قيمتك ما يحددها أحد غيرك",
        color: "#ff6b9d",
      },
    },
    questions: [
      {
        q: "لما حد يمدحك قدام الناس:",
        options: [
          { text: "تقبل المدح بثقة", type: "high_conf" },
          { text: "تشكره بهدوء", type: "quiet_conf" },
          { text: "تفرح من داخلك", type: "growing_conf" },
          { text: "تنحرج", type: "sensitive_conf" },
        ],
      },
      {
        q: "لما حد ينتقدك:",
        options: [
          { text: "ما يأثر عليك كثير", type: "high_conf" },
          { text: "تفكر فيه بهدوء", type: "quiet_conf" },
          { text: "تحاول تتحسن", type: "growing_conf" },
          { text: "يأثر عليك ويزعلك", type: "sensitive_conf" },
        ],
      },
      {
        q: "عندك رأي مختلف باجتماع:",
        options: [
          { text: "تقوله بثقة وبصوت واضح", type: "high_conf" },
          { text: "تقوله بهدوء وباختصار", type: "quiet_conf" },
          { text: "تتردد شوي بس تقوله", type: "growing_conf" },
          { text: "تسكت وتخاف من ردة الفعل", type: "sensitive_conf" },
        ],
      },
      {
        q: "لما تنجح بشيء كبير:",
        options: [
          { text: "تحتفل وتشارك الكل", type: "high_conf" },
          { text: "تفرح بهدوء من الداخل", type: "quiet_conf" },
          { text: "تحس تستحق أكثر", type: "growing_conf" },
          { text: "تستغرب إنك نجحت", type: "sensitive_conf" },
        ],
      },
      {
        q: "لما تقارن نفسك بالآخرين:",
        options: [
          { text: "ما تقارن نفسك بأحد", type: "high_conf" },
          { text: "تقارن لتتعلم مش لتحبط", type: "quiet_conf" },
          { text: "أحيانًا تحس إنك أقل", type: "growing_conf" },
          { text: "دائمًا تحس إنهم أفضل", type: "sensitive_conf" },
        ],
      },
      {
        q: "قبل عرض أو مقابلة مهمة:",
        options: [
          { text: "واثق ومستعد", type: "high_conf" },
          { text: "مرتاح لأنك حضّرت", type: "quiet_conf" },
          { text: "متوتر شوي بس متفائل", type: "growing_conf" },
          { text: "خايف تغلط وتنسى", type: "sensitive_conf" },
        ],
      },
      {
        q: "تدخل مكان فيه ناس ما تعرفهم:",
        options: [
          { text: "تدخل بثقة وتتعرف", type: "high_conf" },
          { text: "تراقب وبعدين تندمج", type: "quiet_conf" },
          { text: "تحاول تلاقي حد تعرفه", type: "growing_conf" },
          { text: "تحس بعدم ارتياح", type: "sensitive_conf" },
        ],
      },
      {
        q: "رأيك بمظهرك:",
        options: [
          { text: "راضي عن نفسك تمامًا", type: "high_conf" },
          { text: "مرتاح بشكلك", type: "quiet_conf" },
          { text: "تحاول تتحسن دائمًا", type: "growing_conf" },
          { text: "دائمًا تلاقي عيوب", type: "sensitive_conf" },
        ],
      },
      {
        q: "لما حد يتجاهلك:",
        options: [
          { text: "ما يفرق معك", type: "high_conf" },
          { text: "تفكر فيه بس ما تاخذه شخصي", type: "quiet_conf" },
          { text: "تحاول تفهم ليش", type: "growing_conf" },
          { text: "تحس إن فيك مشكلة", type: "sensitive_conf" },
        ],
      },
      {
        q: "لو طُلب منك تتكلم عن نفسك:",
        options: [
          { text: "تتكلم بثقة وفخر", type: "high_conf" },
          { text: "تتكلم بتواضع وصدق", type: "quiet_conf" },
          { text: "تحس ما أعطيت نفسك حقها", type: "growing_conf" },
          { text: "تحس بصعوبة", type: "sensitive_conf" },
        ],
      },
    ],
  },
  leadership: {
    types: ["commander", "inspirer", "servant", "strategic"],
    typeNames: {
      commander: "🦁 قائد آمر",
      inspirer: "✨ قائد ملهم",
      servant: "🤲 قائد خادم",
      strategic: "♟️ استراتيجي",
    },
    typeColors: {
      commander: "#ff416c",
      inspirer: "#ffd700",
      servant: "#4ecdc4",
      strategic: "#2193b0",
    },
    personalities: {
      commander: {
        title: "🦁 أسلوبك القيادي: قائد آمر وحازم",
        desc: "أنت قائد يتخذ القرارات بسرعة وحزم.\n\n✅ نقاط قوتك:\n• قراراتك حاسمة\n• تسيطر على المواقف\n• عندك هيبة طبيعية\n\n⚠️ انتبه من:\n• لا تفرض رأيك بالقوة\n• اسمع فريقك",
        color: "#ff416c",
      },
      inspirer: {
        title: "✨ أسلوبك القيادي: قائد ملهم ومحفز",
        desc: "أنت قائد يلهم الناس بطاقته.\n\n✅ نقاط قوتك:\n• الناس تتبعك بقناعة\n• تخلق جو إيجابي\n• عندك رؤية واضحة\n\n⚠️ انتبه من:\n• الحماس لوحده ما يكفي\n• ركز على التنفيذ",
        color: "#ffd700",
      },
      servant: {
        title: "🤲 أسلوبك القيادي: قائد خادم ومتواضع",
        desc: "أنت قائد يضع فريقه أولاً.\n\n✅ نقاط قوتك:\n• فريقك يثق فيك\n• تبني علاقات قوية\n• الناس تنمو تحت قيادتك\n\n⚠️ انتبه من:\n• لا تنسى نفسك\n• أحيانًا لازم تكون حازم",
        color: "#4ecdc4",
      },
      strategic: {
        title: "♟️ أسلوبك القيادي: استراتيجي وذكي",
        desc: "أنت قائد يفكر بالصورة الكبيرة.\n\n✅ نقاط قوتك:\n• رؤية بعيدة المدى\n• تتجنب المشاكل مسبقًا\n• قراراتك محسوبة\n\n⚠️ انتبه من:\n• لا تنسى التنفيذ\n• فريقك يحتاج يفهم خطتك",
        color: "#2193b0",
      },
    },
    questions: [
      {
        q: "في مشروع جماعي:",
        options: [
          { text: "تكون المسؤول وتوزع المهام", type: "commander" },
          { text: "تحفز الفريق وتشجعهم", type: "inspirer" },
          { text: "تساعد الكل وتسأل شو يحتاجوا", type: "servant" },
          { text: "تضع الخطة والجدول", type: "strategic" },
        ],
      },
      {
        q: "خلاف بين أعضاء الفريق:",
        options: [
          { text: "تحسم بقرار واضح", type: "commander" },
          { text: "تحاول تلهمهم يتفقوا", type: "inspirer" },
          { text: "تسمع كل الأطراف", type: "servant" },
          { text: "تحلل وتقترح حل ذكي", type: "strategic" },
        ],
      },
      {
        q: "فريقك فشل بمهمة:",
        options: [
          { text: "تتحمل المسؤولية وتصحح", type: "commander" },
          { text: "ترفع معنوياتهم", type: "inspirer" },
          { text: "تساعدهم شخصيًا", type: "servant" },
          { text: "تحلل السبب وتغير الخطة", type: "strategic" },
        ],
      },
      {
        q: "عندك فكرة جديدة:",
        options: [
          { text: "تقرر تنفيذها مباشرة", type: "commander" },
          { text: "تشارك الفريق وتحمسهم", type: "inspirer" },
          { text: "تسأل الفريق رأيهم", type: "servant" },
          { text: "تدرسها بالتفصيل", type: "strategic" },
        ],
      },
      {
        q: "عضو بالفريق ما يشتغل:",
        options: [
          { text: "تحذره بشكل مباشر", type: "commander" },
          { text: "تحاول تفهم مشكلته", type: "inspirer" },
          { text: "تساعده بشغله", type: "servant" },
          { text: "تعيد توزيع المهام بذكاء", type: "strategic" },
        ],
      },
      {
        q: "لما تنجح كقائد:",
        options: [
          { text: "تحس بالفخر بقيادتك", type: "commander" },
          { text: "تحتفل مع الفريق", type: "inspirer" },
          { text: "تنسب الفضل للفريق", type: "servant" },
          { text: "تفكر بالخطوة الجاية", type: "strategic" },
        ],
      },
      {
        q: "لو كنت مدير شركة:",
        options: [
          { text: "حازم وصارم بالقوانين", type: "commander" },
          { text: "بيئة عمل ممتعة ومحفزة", type: "inspirer" },
          { text: "تهتم براحة الموظفين", type: "servant" },
          { text: "تركز على النمو والتخطيط", type: "strategic" },
        ],
      },
      {
        q: "القائد الحقيقي:",
        options: [
          { text: "ياخذ قرارات صعبة", type: "commander" },
          { text: "يلهم الناس ويغير حياتهم", type: "inspirer" },
          { text: "يخدم فريقه ويضحي", type: "servant" },
          { text: "يفكر بالمستقبل ويخطط", type: "strategic" },
        ],
      },
      {
        q: "الفريق رفض فكرتك:",
        options: [
          { text: "تصر على رأيك", type: "commander" },
          { text: "تقنعهم بطريقة ثانية", type: "inspirer" },
          { text: "تقبل رأيهم", type: "servant" },
          { text: "تدور على بيانات تدعم فكرتك", type: "strategic" },
        ],
      },
      {
        q: "أهم صفة بالقائد:",
        options: [
          { text: "الحزم والقوة", type: "commander" },
          { text: "الكاريزما والتأثير", type: "inspirer" },
          { text: "التواضع والخدمة", type: "servant" },
          { text: "الذكاء والتخطيط", type: "strategic" },
        ],
      },
    ],
  },
  social: {
    types: ["social_butterfly", "deep_connector", "observer", "helper"],
    typeNames: {
      social_butterfly: "🦋 اجتماعي",
      deep_connector: "💎 عميق",
      observer: "👁️ مراقب",
      helper: "🤗 مساعد",
    },
    typeColors: {
      social_butterfly: "#ffd700",
      deep_connector: "#ff416c",
      observer: "#2193b0",
      helper: "#4ecdc4",
    },
    personalities: {
      social_butterfly: {
        title: "🦋 أسلوبك الاجتماعي: فراشة اجتماعية",
        desc: "أنت إنسان يحب الناس والتجمعات.\n\n✅ نقاط قوتك:\n• شبكة علاقات واسعة\n• تنشر طاقة إيجابية\n• الناس تنجذب لك\n\n⚠️ انتبه من:\n• العلاقات قد تكون سطحية\n• ركز على علاقات عميقة",
        color: "#ffd700",
      },
      deep_connector: {
        title: "💎 أسلوبك الاجتماعي: عميق ومخلص",
        desc: "أنت إنسان يفضل القليل من العلاقات العميقة.\n\n✅ نقاط قوتك:\n• علاقاتك صادقة ومتينة\n• تعرف أصدقاءك بعمق\n• وفي ومخلص\n\n⚠️ انتبه من:\n• لا تنغلق على نفسك\n• جرب تتعرف على ناس جدد",
        color: "#ff416c",
      },
      observer: {
        title: "👁️ أسلوبك الاجتماعي: مراقب وذكي",
        desc: "أنت إنسان يراقب ويفهم الناس.\n\n✅ نقاط قوتك:\n• تفهم الناس بعمق\n• ما تنخدع بسهولة\n• تختار أصدقاءك بعناية\n\n⚠️ انتبه من:\n• لا تبالغ بالمراقبة\n• أعطِ الناس فرصة",
        color: "#2193b0",
      },
      helper: {
        title: "🤗 أسلوبك الاجتماعي: مساعد ومعطاء",
        desc: "أنت إنسان يحب يساعد الآخرين.\n\n✅ نقاط قوتك:\n• محبوب ومقدّر\n• تصنع فرق حقيقي\n• قلبك كبير\n\n⚠️ انتبه من:\n• لا تنسى نفسك\n• بعض الناس قد يستغلون طيبتك",
        color: "#4ecdc4",
      },
    },
    questions: [
      {
        q: "في حفلة أو تجمع:",
        options: [
          { text: "تتعرف على أكبر عدد", type: "social_butterfly" },
          { text: "تجلس مع المقربين", type: "deep_connector" },
          { text: "تراقب وتستمتع", type: "observer" },
          { text: "تساعد المضيف", type: "helper" },
        ],
      },
      {
        q: "صديق قديم اتصل بعد غياب:",
        options: [
          { text: "تفرح وترحب", type: "social_butterfly" },
          { text: "تسأله ليش غاب", type: "deep_connector" },
          { text: "ترد بحذر", type: "observer" },
          { text: "تسأله إذا يحتاج مساعدة", type: "helper" },
        ],
      },
      {
        q: "حد جديد انضم لمجموعتكم:",
        options: [
          { text: "ترحب وتعرفه على الكل", type: "social_butterfly" },
          { text: "تتعرف عليه ببطء", type: "deep_connector" },
          { text: "تراقبه فترة", type: "observer" },
          { text: "تساعده يندمج", type: "helper" },
        ],
      },
      {
        q: "صديقك زعلان ومحتاجك:",
        options: [
          { text: "تطلعوا مشوار وتغيروا جو", type: "social_butterfly" },
          { text: "تجلس وتسمعه بعمق", type: "deep_connector" },
          { text: "تحاول تفهم وتنصح", type: "observer" },
          { text: "تسوي أي شيء يساعده", type: "helper" },
        ],
      },
      {
        q: "تفضل تقضي إجازتك:",
        options: [
          { text: "مع مجموعة كبيرة", type: "social_butterfly" },
          { text: "مع صديق مقرب", type: "deep_connector" },
          { text: "لحالك بهدوء", type: "observer" },
          { text: "تتطوع بعمل خيري", type: "helper" },
        ],
      },
      {
        q: "حد يغتاب صديقك:",
        options: [
          { text: "تغير الموضوع بذكاء", type: "social_butterfly" },
          { text: "تدافع عنه بقوة", type: "deep_connector" },
          { text: "تسمع بس ما تشارك", type: "observer" },
          { text: "تحاول تصلح بينهم", type: "helper" },
        ],
      },
      {
        q: "أكثر شيء يضايقك:",
        options: [
          { text: "الناس المملة", type: "social_butterfly" },
          { text: "خيانة الثقة", type: "deep_connector" },
          { text: "الناس المزيفة", type: "observer" },
          { text: "استغلال الطيبة", type: "helper" },
        ],
      },
      {
        q: "الصداقة حقيقية لما:",
        options: [
          { text: "تكون نفسك بدون تصنع", type: "social_butterfly" },
          { text: "يوقف معك بالصعب", type: "deep_connector" },
          { text: "يفهمك بدون ما تحكي", type: "observer" },
          { text: "يساعدك بدون ما تطلب", type: "helper" },
        ],
      },
      {
        q: "لو لازم تختار:",
        options: [
          { text: "حفلة كبيرة", type: "social_butterfly" },
          { text: "سهرة مع صديق مقرب", type: "deep_connector" },
          { text: "أمسية لحالك", type: "observer" },
          { text: "مساعدة حد محتاج", type: "helper" },
        ],
      },
      {
        q: "أفضل هدية من صديق:",
        options: [
          { text: "مفاجأة قدام الكل", type: "social_butterfly" },
          { text: "رسالة صادقة", type: "deep_connector" },
          { text: "شيء يدل إنه يفهمك", type: "observer" },
          { text: "يساعدك بشيء تحتاجه", type: "helper" },
        ],
      },
    ],
  },
  adventure: {
    types: ["daredevil", "dreamer", "planner", "realist"],
    typeNames: {
      daredevil: "🚀 مغامر",
      dreamer: "💫 حالم",
      planner: "📋 مخطط",
      realist: "⚖️ واقعي",
    },
    typeColors: {
      daredevil: "#ff416c",
      dreamer: "#ffd700",
      planner: "#2193b0",
      realist: "#4ecdc4",
    },
    personalities: {
      daredevil: {
        title: "🚀 روحك: مغامر جريء",
        desc: "أنت إنسان يعشق المخاطرة والتجارب الجديدة.\n\n✅ نقاط قوتك:\n• شجاعة استثنائية\n• تعيش الحياة بالكامل\n• تلهم الآخرين\n\n⚠️ انتبه من:\n• المخاطرة بدون حساب\n• فكر بالعواقب",
        color: "#ff416c",
      },
      dreamer: {
        title: "💫 روحك: حالم وطموح",
        desc: "أنت إنسان يحلم أحلام كبيرة.\n\n✅ نقاط قوتك:\n• خيال واسع وإبداعي\n• تحفز نفسك والآخرين\n• أحلامك تسوقك\n\n⚠️ انتبه من:\n• الأحلام بدون عمل تبقى أحلام\n• ابدأ بخطوات صغيرة",
        color: "#ffd700",
      },
      planner: {
        title: "📋 روحك: مخطط ومنظم",
        desc: "أنت إنسان يحب يخطط لكل شيء.\n\n✅ نقاط قوتك:\n• تحقق أهدافك بانتظام\n• رؤية واضحة\n• ما تضيع وقتك\n\n⚠️ انتبه من:\n• التخطيط الزائد يمنعك من البدء\n• أحيانًا لازم عفوية",
        color: "#2193b0",
      },
      realist: {
        title: "⚖️ روحك: واقعي ومتزن",
        desc: "أنت إنسان يفكر بواقعية.\n\n✅ نقاط قوتك:\n• قراراتك عملية\n• ما تنخدع بالأوهام\n• الناس تثق برأيك\n\n⚠️ انتبه من:\n• الواقعية الزائدة قد تقتل الحلم\n• أحيانًا لازم تحلم أكبر",
        color: "#4ecdc4",
      },
    },
    questions: [
      {
        q: "عرضوا عليك السفر لبلد مجهول بكرة:",
        options: [
          { text: "توافق فورًا", type: "daredevil" },
          { text: "تتخيل المغامرة", type: "dreamer" },
          { text: "تبحث وتخطط", type: "planner" },
          { text: "تفكر بالتكاليف", type: "realist" },
        ],
      },
      {
        q: "حلمك الأكبر:",
        options: [
          { text: "تجرب كل شيء", type: "daredevil" },
          { text: "تحقق شيء عظيم", type: "dreamer" },
          { text: "تبني حياة منظمة", type: "planner" },
          { text: "تعيش حياة مريحة", type: "realist" },
        ],
      },
      {
        q: "فكرة مشروع جديد:",
        options: [
          { text: "تبدأ فيها فورًا", type: "daredevil" },
          { text: "تحلم كيف بتكبر", type: "dreamer" },
          { text: "تكتب خطة عمل", type: "planner" },
          { text: "تدرس السوق أولاً", type: "realist" },
        ],
      },
      {
        q: "لو خسرت كل أموالك:",
        options: [
          { text: "بداية جديدة مثيرة", type: "daredevil" },
          { text: "تؤمن إنك رح ترجع", type: "dreamer" },
          { text: "تبدأ تخطط للاسترداد", type: "planner" },
          { text: "تفكر كيف صار وتتعلم", type: "realist" },
        ],
      },
      {
        q: "القواعد والأنظمة:",
        options: [
          { text: "موجودة لتتكسر", type: "daredevil" },
          { text: "ما تمنعك من الحلم", type: "dreamer" },
          { text: "مهمة وتنظم الحياة", type: "planner" },
          { text: "تتبع المنطقية فقط", type: "realist" },
        ],
      },
      {
        q: "سنة إجازة كاملة:",
        options: [
          { text: "تسافر حول العالم", type: "daredevil" },
          { text: "تبدأ مشروع أحلامك", type: "dreamer" },
          { text: "تتعلم مهارات بخطة", type: "planner" },
          { text: "ترتاح وتستمتع", type: "realist" },
        ],
      },
      {
        q: "النجاح بالنسبة لك:",
        options: [
          { text: "تجارب مختلفة", type: "daredevil" },
          { text: "تحقيق حلم كبير", type: "dreamer" },
          { text: "تحقيق أهداف محددة", type: "planner" },
          { text: "حياة مستقرة وسعيدة", type: "realist" },
        ],
      },
      {
        q: "لو لازم تختار وظيفة:",
        options: [
          { text: "مغامرة فيها سفر", type: "daredevil" },
          { text: "إبداعية تحقق رؤيتك", type: "dreamer" },
          { text: "مستقرة مع خطة ترقي", type: "planner" },
          { text: "مريحة بدخل جيد", type: "realist" },
        ],
      },
      {
        q: "رأيك بالفشل:",
        options: [
          { text: "جزء من المغامرة", type: "daredevil" },
          { text: "خطوة تقربك من حلمك", type: "dreamer" },
          { text: "درس تتعلم منه", type: "planner" },
          { text: "شيء لازم تتجنبه", type: "realist" },
        ],
      },
      {
        q: "لو رجعت 10 سنين:",
        options: [
          { text: "تاخذ مخاطرات أكثر", type: "daredevil" },
          { text: "تبدأ بتحقيق أحلامك", type: "dreamer" },
          { text: "تخطط حياتك أفضل", type: "planner" },
          { text: "ما تغير كثير", type: "realist" },
        ],
      },
    ],
  },
};

const dailyThemes = [
  { name: "طريقة اتخاذ القرار 🧠", key: "decision" },
  { name: "أسلوبك في الحب 💖", key: "love" },
  { name: "كيف تواجه الضغط 🔥", key: "stress" },
  { name: "مستوى ثقتك بنفسك 🪞", key: "confidence" },
  { name: "شخصيتك القيادية 👑", key: "leadership" },
  { name: "أسلوبك الاجتماعي 🤝", key: "social" },
  { name: "روحك المغامرة 🚀", key: "adventure" },
];

const todayIndex = new Date().getDay();
const todayTheme = dailyThemes[todayIndex];
const todayBank = allQuestionBanks[todayTheme.key];
const today = new Date().toDateString();

let questions = todayBank.questions;
let current = 0;
let answers = [];
let scores = {};
todayBank.types.forEach((t) => (scores[t] = 0));

function getPlayersCount() {
  let count = parseInt(localStorage.getItem("playersCount")) || 0;

  return count;
}

// ===== Navigation =====
function goToTest(testName) {
  window.location.href = testName + ".html";
}

function showLanding() {
  document.getElementById("landingPage").classList.remove("hidden");
  document.getElementById("gameSection").classList.add("hidden");
  document.getElementById("privacyPage").classList.add("hidden");
  document.getElementById("contactPage").classList.add("hidden");
  initLanding();
}

function showPrivacy() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("gameSection").classList.add("hidden");
  document.getElementById("privacyPage").classList.remove("hidden");
  document.getElementById("contactPage").classList.add("hidden");
}

function showContact() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("gameSection").classList.add("hidden");
  document.getElementById("privacyPage").classList.add("hidden");
  document.getElementById("contactPage").classList.remove("hidden");
}

function initLanding() {
  document.getElementById("landingThemeName").innerText = todayTheme.name;
  document.getElementById("playersCount").innerText =
    getPlayersCount().toLocaleString();
  handleStreak();
  let streak = parseInt(localStorage.getItem("streak")) || 0;
  if (streak > 1) {
    document.getElementById("landingStreak").innerText =
      "🔥".repeat(Math.min(streak, 5)) + " " + streak + " يوم متتالي";
  }
  let savedResult = loadResult();
  let savedDate = localStorage.getItem("challengeDate");
  let btn = document.getElementById("mainStartBtn");
  if (savedDate === today && savedResult) {
    btn.innerText = "شاهد نتيجتك 📊";
    btn.onclick = function () {
      showGameSection();
      lockGame();
    };
  } else if (loadProgress() && current < questions.length) {
    btn.innerText = "أكمل الاختبار ▶️";
    btn.onclick = startFromLanding;
  } else {
    btn.innerText = "ابدأ اختبار اليوم 🚀";
    btn.onclick = startFromLanding;
  }
  startCountdown();
}

function startFromLanding() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("gameSection").classList.remove("hidden");
  let savedDate = localStorage.getItem("challengeDate");
  let savedResult = loadResult();
  let hasProgress = loadProgress();
  if (savedDate === today && savedResult) {
    lockGame();
  } else if (hasProgress && current < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem("challengeDate", today);
    current = 0;
    scores = {};
    answers = [];
    todayBank.types.forEach((t) => (scores[t] = 0));
    showQuestion();
  }
  startCountdown();
  handleStreak();
}

function showGameSection() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("gameSection").classList.remove("hidden");
  startCountdown();
  handleStreak();
}

// ===== Storage =====
function saveProgress() {
  localStorage.setItem(
    "gameProgress",
    JSON.stringify({
      current,
      scores,
      answers,
      date: today,
      theme: todayTheme.key,
    }),
  );
}
function loadProgress() {
  let saved = localStorage.getItem("gameProgress");
  if (!saved) return false;
  let data = JSON.parse(saved);
  if (data.date !== today || data.theme !== todayTheme.key) {
    localStorage.removeItem("gameProgress");
    return false;
  }
  current = data.current;
  scores = data.scores;
  answers = data.answers || [];
  return true;
}
function saveResult(maxType) {
  let resultData = {
    date: today,
    theme: todayTheme.name,
    themeKey: todayTheme.key,
    maxType,
    scores,
    answers,
  };
  localStorage.setItem("todayResult", JSON.stringify(resultData));
  let history = JSON.parse(localStorage.getItem("resultHistory") || "[]");
  if (!history.find((i) => i.date === today)) {
    history.push(resultData);
    localStorage.setItem("resultHistory", JSON.stringify(history));
  }
}
function loadResult() {
  let saved = localStorage.getItem("todayResult");
  if (!saved) return null;
  let data = JSON.parse(saved);
  if (data.date !== today) {
    localStorage.removeItem("todayResult");
    return null;
  }
  return data;
}

// ===== Game Logic =====
function showQuestion() {
  if (current >= questions.length) {
    showAnalysis();
    return;
  }
  document.getElementById("themeTitle").innerText =
    "اختبار اليوم: " + todayTheme.name;
  document.getElementById("analysisBox").classList.add("hidden");
  document.getElementById("scoreBars").classList.add("hidden");
  document.getElementById("resultArea").style.display = "none";
  document.getElementById("nextBtn").classList.add("hidden");
  document.getElementById("shareBtnGame").classList.add("hidden");
  document.getElementById("shareBtnFinal").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
  let q = questions[current];
  document.getElementById("questionText").innerText = q.q;
  let container = document.getElementById("optionsContainer");
  container.innerHTML = "";
  q.options.forEach((option, index) => {
    let btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option.text;
    btn.onclick = () => vote(index);
    container.appendChild(btn);
  });
  let pct = (current / questions.length) * 100;
  let bar = document.getElementById("progressBar");
  bar.style.background =
    pct < 40
      ? "linear-gradient(90deg,#2193b0,#6dd5ed)"
      : pct < 70
        ? "linear-gradient(90deg,#f7971e,#ffd200)"
        : "linear-gradient(90deg,#ff416c,#ff4b2b)";
  bar.style.width = pct + "%";
  document.getElementById("progressText").innerText =
    "السؤال " + (current + 1) + " من " + questions.length;
}

function vote(choice) {
  let q = questions[current];
  scores[q.options[choice].type]++;
  answers.push({
    question: current,
    choice,
    type: q.options[choice].type,
  });
  // No percentage bars - just move forward
  document.getElementById("optionsContainer").innerHTML = "";
  document.getElementById("resultArea").style.display = "none";
  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("shareBtnGame").classList.remove("hidden");
  current++;
  saveProgress();
}

function showAnalysis() {
  document.getElementById("gameArea").classList.add("hidden");
  let maxType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b,
  );
  let totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  let result = todayBank.personalities[maxType];
  let box = document.getElementById("analysisBox");
  box.innerHTML =
    '<div style="font-size:20px;font-weight:bold;margin-bottom:15px;color:' +
    result.color +
    ';">' +
    result.title +
    '</div><div style="font-size:14px;line-height:1.9;white-space:pre-line;">' +
    result.desc +
    "</div>";
  box.classList.remove("hidden");
  setTimeout(() => box.classList.add("celebrate"), 100);

  let barsHTML =
    '<div style="font-size:15px;font-weight:bold;margin-bottom:12px;">📊 توزيع شخصيتك:</div>';
  todayBank.types.forEach((type) => {
    let pct =
      totalScore > 0 ? Math.round((scores[type] / totalScore) * 100) : 0;
    barsHTML +=
      '<div class="score-bar-container"><div class="score-bar-label">' +
      todayBank.typeNames[type] +
      " — " +
      pct +
      '%</div><div class="score-bar-bg"><div class="score-bar-fill" style="width:' +
      pct +
      "%;background:" +
      todayBank.typeColors[type] +
      ';"></div></div></div>';
  });
  document.getElementById("scoreBars").innerHTML = barsHTML;
  document.getElementById("scoreBars").classList.remove("hidden");
  document.getElementById("shareBtnFinal").classList.remove("hidden");

  saveResult(maxType);
  completeTest();
  let players = parseInt(localStorage.getItem("playersCount")) || 0;

  localStorage.setItem("playersCount", players + 1);
  localStorage.removeItem("gameProgress");
  localStorage.setItem("challengeDate", today);

  if (typeof gtag !== "undefined") {
    gtag("event", "quiz_completed", {
      event_category: "engagement",
      event_label: todayTheme.key + "_" + maxType,
    });
  }

  const end = Date.now() + 2000;
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function lockGame() {
  document.getElementById("gameArea").classList.add("hidden");
  let savedResult = loadResult();
  let box = document.getElementById("lockBox");
  if (!savedResult) {
    box.innerHTML =
      "✅ خلصت اختبار اليوم!<br><br>ارجع بكرة لاكتشاف جانب جديد 🔮";
    box.classList.remove("hidden");
    return;
  }
  let bank = allQuestionBanks[savedResult.themeKey] || todayBank;
  let result = bank.personalities[savedResult.maxType];
  let totalScore = Object.values(savedResult.scores).reduce((a, b) => a + b, 0);
  let barsHTML =
    '<div style="font-size:15px;font-weight:bold;margin-bottom:12px;">📊 نتيجتك من اليوم:</div>';
  bank.types.forEach((type) => {
    let pct =
      totalScore > 0
        ? Math.round((savedResult.scores[type] / totalScore) * 100)
        : 0;
    barsHTML +=
      '<div class="score-bar-container"><div class="score-bar-label">' +
      bank.typeNames[type] +
      " — " +
      pct +
      '%</div><div class="score-bar-bg"><div class="score-bar-fill" style="width:' +
      pct +
      "%;background:" +
      bank.typeColors[type] +
      ';"></div></div></div>';
  });
  box.innerHTML =
    '<div style="font-size:18px;font-weight:bold;margin-bottom:10px;color:' +
    result.color +
    ';">' +
    result.title +
    '</div><div style="font-size:13px;color:#aaa;margin-bottom:15px;">اختبار اليوم: ' +
    savedResult.theme +
    "</div>" +
    barsHTML +
    '<div style="margin-top:15px;font-size:13px;color:#666;">🔄 اختبار جديد يتجدد بكرة!</div>';
  box.classList.remove("hidden");
  document.getElementById("shareBtnFinal").classList.remove("hidden");
}

function shareResult() {
  let savedResult = loadResult();
  let bank = savedResult
    ? allQuestionBanks[savedResult.themeKey] || todayBank
    : todayBank;
  let maxType = savedResult
    ? savedResult.maxType
    : Object.keys(scores).reduce(
        (a, b) => (scores[a] > scores[b] ? a : b),
        "analytical",
      );
  let result = bank.personalities[maxType];
  let text =
    "اكتشفت نتيجتي في اختبار 'من أنت اليوم؟' 🔮\n\n" +
    result.title +
    "\n\nجرب أنت الاختبار!\nhttps://MahmoudSalam0.github.io/shahsiyatak/";
  if (navigator.share) {
    navigator
      .share({
        title: "من أنت اليوم؟",
        text,
        url: "https://MahmoudSalam0.github.io/shahsiyatak/",
      })
      .catch(() => {});
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("✅ تم نسخ النتيجة!"))
      .catch(() => {});
  }
}

// ✅ جلب الإحصائيات الحقيقية للمستخدم
document.addEventListener("DOMContentLoaded", () => {
  let totalEl = document.getElementById("totalTests");
  let streakEl = document.getElementById("streakDays");

  if (totalEl) totalEl.innerText = completed;
  if (streakEl) streakEl.innerText = streak;
});

let now = new Date();
let tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

function update() {
  let diff = tomorrow - new Date();
  let h = Math.floor((diff % 86400000) / 3600000);
  let m = Math.floor((diff % 3600000) / 60000);
  let s = Math.floor((diff % 60000) / 1000);
  let txt = "اختبار جديد بعد " + h + "س " + m + "د " + s + "ث ⏳";

  let el1 = document.getElementById("countdown");
  let el2 = document.getElementById("landingCountdown");

  if (el1) el1.innerText = txt;
  if (el2) el2.innerText = txt;
}

function startCountdown() {
  update();
  setInterval(update, 1000);
}

function handleStreak() {
  let lastDate = localStorage.getItem("lastPlayDate");
  let streak = parseInt(localStorage.getItem("streak")) || 0;
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let today = new Date().toDateString();

  if (lastDate === today) {
    /* same day */
  } else if (lastDate === yesterday.toDateString()) {
    streak++;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastPlayDate", today);
  } else {
    streak = 1;
    localStorage.setItem("streak", 1);
    localStorage.setItem("lastPlayDate", today);
  }

  let el = document.getElementById("streakBox");
  if (el && streak > 1) {
    el.innerText =
      "🔥".repeat(Math.min(streak, 5)) + " " + streak + " يوم متتالي";
  }
}

function initLanding() {
  startCountdown();
  handleStreak();
}

window.onload = initLanding;
