const modelsData = [
  {
    category: "1. 逻辑思维",
    models: [
      {
        id: "1-1",
        title: "金字塔原理",
        summary: "职场写作或汇报，让听众瞬间抓住你的核心重点。",
        detail: "<h4>解决什么问题？</h4><p>解决说话啰嗦、缺乏条理，听完抓不住重点的问题。</p><h4>具体怎么做？</h4><ul><li><strong>结论先行：</strong>第一句话直接抛出核心结论。</li><li><strong>以上统下：</strong>接着给出支撑结论的3个核心理由。</li><li><strong>逻辑递进：</strong>理由之间按重要性或时间排列。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>请假时别说“我头晕发烧要去医院，想请假”。要说：“老板我想请假一天（结论）。因为：1.发烧要看病；2.工作已交接；3.不影响项目（理由）。”</div>"
      },
      {
        id: "1-2",
        title: "MECE原则",
        summary: "拆解复杂问题，确保思考既不遗漏也不重复。",
        detail: "<h4>解决什么问题？</h4><p>解决思考问题时“想一点是一点”，导致方案有漏洞的问题。</p><h4>具体怎么做？</h4><ul><li><strong>相互独立 (Mutually Exclusive)：</strong>切分出的部分不能有重叠。</li><li><strong>完全穷尽 (Collectively Exhaustive)：</strong>切分出的部分加起来等于全部。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>把人类分类。错误分类：男人、女人、老人（重叠且未穷尽）。正确分类：生理男性、生理女性、双性/间性人。</div>"
      },
      {
        id: "1-3",
        title: "六顶思考帽",
        summary: "团队开会决策，避免无谓的争吵，提高效率。",
        detail: "<h4>解决什么问题？</h4><p>解决开会时大家各执己见，悲观的人和乐观的人永远吵不到一块去的问题。</p><h4>具体怎么做？</h4><ul><li>所有人在同一时间“戴上”同一种视角的帽子。</li><li><strong>白帽：</strong>只谈事实数据；<strong>黑帽：</strong>只找风险漏洞；<strong>黄帽：</strong>只谈好处；<strong>绿帽：</strong>提新点子。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>讨论新产品。主持人说：“现在戴上黑帽，花5分钟把可能导致的最坏结果列出来。” 此时所有人都只能挑刺，不准反驳。</div>"
      },
      {
        id: "1-4",
        title: "PREP法",
        summary: "极短时间内的沟通说服，如电梯演讲。",
        detail: "<h4>解决什么问题？</h4><p>解决被突然提问时，大脑空白、语无伦次的问题。</p><h4>具体怎么做？</h4><ul><li><strong>P (Point 结论)：</strong>一句话直接给出你的观点。</li><li><strong>R (Reason 理由)：</strong>一句话解释为什么。</li><li><strong>E (Example 案例)：</strong>给出一个强有力的数据或真实例子。</li><li><strong>P (Point 结论)：</strong>最后重申结论。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>“我赞成这个方案（结论）。因为它能极大降低获客成本（理由）。上个季度测试时，成本下降了30%（案例）。所以我们应该全面铺开（结论）。”</div>"
      },
      {
        id: "1-5",
        title: "时间管理四象限",
        summary: "每天工作任务繁多时，快速排出轻重缓急。",
        detail: "<h4>解决什么问题？</h4><p>解决每天忙得焦头烂额，下班却发现核心工作一点没推进的问题。</p><h4>具体怎么做？</h4><ul><li><strong>重要且紧急：</strong>立刻亲自去做（如危机处理）。</li><li><strong>重要不紧急：</strong>分配核心时间每天做（如战略规划、学习）。</li><li><strong>紧急不重要：</strong>尽量交给别人做（如无意义的会议）。</li><li><strong>不重要不紧急：</strong>坚决不做。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>高手之所以是高手，是因为他们把极大的精力花在了“重要但不紧急”的事情上，从而极大减少了未来发生“重要且紧急”的危机。</div>"
      },
      {
        id: "1-6",
        title: "黄金圈法则",
        summary: "推销产品或发表演讲，从内核直击人心。",
        detail: "<h4>解决什么问题？</h4><p>解决推销或动员时，别人不买账、没有共鸣的问题。</p><h4>具体怎么做？</h4><ul><li><strong>Why（为什么）：</strong>先大声说出你的信念和初衷。</li><li><strong>How（怎么做）：</strong>你打算用什么核心方法实现信念。</li><li><strong>What（是什么）：</strong>最后才是你具体的产品。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>苹果公司的营销：“我们为了打破常规（Why）。我们的做法是设计极简的产品（How）。碰巧，我们做了一台很棒的手机（What），想买吗？”</div>"
      },
      {
        id: "1-7",
        title: "归纳与演绎",
        summary: "从杂乱现象中发现规律，或用已知推导未知。",
        detail: "<h4>解决什么问题？</h4><p>解决面对复杂世界时无法形成独立判断逻辑的问题。</p><h4>具体怎么做？</h4><ul><li><strong>归纳法：</strong>观察现象 A、B、C 都有特征 X，总结出结论“同类都有特征X”。</li><li><strong>演绎法：</strong>大前提 + 小前提 -> 结论。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>看到天鹅都是白的，总结出“天鹅都是白的”是归纳法。公司规定迟到扣钱（大前提），小明今天迟到（小前提），推导小明被扣钱，是演绎法。</div>"
      },
      {
        id: "1-8",
        title: "5W1H分析法",
        summary: "接手新项目或分析事件时，确保考虑周全。",
        detail: "<h4>解决什么问题？</h4><p>解决考虑问题丢三落四、计划不周密的问题。</p><h4>具体怎么做？</h4><ul><li>问自己六个问题：为什么(Why)、做什么(What)、谁来做(Who)、何时(When)、在哪(Where)、怎么做(How)。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>老板让组织团建。先梳理：为什么建？缓解压力。谁参加？全员。在哪办？郊区。何时？下周五。做什么？烧烤。怎么去？大巴。</div>"
      },
      {
        id: "1-9",
        title: "KJ法 (亲和图法)",
        summary: "头脑风暴后，把杂乱点子梳理出清晰结构。",
        detail: "<h4>解决什么问题？</h4><p>解决开会讨论出几十个想法，最后不知怎么落地的问题。</p><h4>具体怎么做？</h4><ul><li>把所有点子写在便签上贴在白板上。</li><li>凭直觉把意思相近的便签聚拢成一堆。</li><li>为每一堆便签提炼一个概括性的标题。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>把“打折”、“买一送一”归为一堆，命名为【价格促销】；把“刷墙”、“放音乐”归为一堆，命名为【环境升级】。</div>"
      },
      {
        id: "1-10",
        title: "曼陀罗思考法",
        summary: "创意枯竭时强迫发散思维，拆解大目标。",
        detail: "<h4>解决什么问题？</h4><p>解决想不出新点子，或面对大目标不知从何下手的问题。</p><h4>具体怎么做？</h4><ul><li>画一个3x3的九宫格。</li><li>最中间写“核心主题”，周围8个格子填满相关的想法或行动。</li><li>把这8个想法再生成8个九宫格，得到64个落地动作。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>大谷翔平的九宫格：中心是“成为第一指名”，周围是体能、控球、心理等。再针对“心理”拆解出具体做法（不动摇、平常心）。</div>"
      }
    ]
  },
  {
    category: "2. 执行能力",
    models: [
      {
        id: "2-1",
        title: "OKR工作法",
        summary: "统一团队努力方向，激发野心挑战高目标。",
        detail: "<h4>解决什么问题？</h4><p>解决员工混日子只求完成KPI，缺乏创新动力的问题。</p><h4>具体怎么做？</h4><ul><li><strong>O (目标)：</strong>设定一个极具野心的方向。</li><li><strong>KR (关键结果)：</strong>设定3-5个完全量化的结果来衡量进度。</li><li>不与薪酬直接挂钩，鼓励挑战不可能。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>O = 让打车变得极度简单。KR1 = 叫车平均等待低于 3 分钟；KR2 = 司机接单率提升至 95%。</div>"
      },
      {
        id: "2-2",
        title: "KPI树",
        summary: "将大战略指标科学拆解到每个基层员工。",
        detail: "<h4>解决什么问题？</h4><p>老板要“营收破亿”，基层却不知道自己每天该干什么。</p><h4>具体怎么做？</h4><ul><li>利用公式将核心指标向下拆解：销售额 = 流量 × 转化率 × 客单价。</li><li>把底层指标（如打电话数量）分给对应的人。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>奶茶店员无法控制“总利润”，但可以控制“客单价”。KPI变成：每卖一杯必须问一句“加珍珠吗？”。</div>"
      },
      {
        id: "2-3",
        title: "PDCA循环",
        summary: "项目质量管理，确保不断改进不犯同一种错。",
        detail: "<h4>解决什么问题？</h4><p>解决做事不复盘，导致同样的问题反复出现的问题。</p><h4>具体怎么做？</h4><ul><li><strong>Plan (计划)：</strong>分析原因，制定改进计划。</li><li><strong>Do (执行)：</strong>实施计划。</li><li><strong>Check (检查)：</strong>对比结果与预期偏差。</li><li><strong>Act (处理)：</strong>成功经验标准化，失败教训带入下个循环。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>你想减肥。P: 每天跑3公里。D: 跑三天。C: 膝盖疼没跑。A: 总结跑鞋不对，下个循环P变成先买对跑鞋。</div>"
      },
      {
        id: "2-4",
        title: "麦肯锡7S模型",
        summary: "诊断企业转型为什么推不动，排查深层隐患。",
        detail: "<h4>解决什么问题？</h4><p>以为换个战略就能救公司，结果因为隐形的文化阻碍而失败。</p><h4>具体怎么做？</h4><ul><li>不仅看硬件：战略、结构、制度。</li><li>更要诊断软件：风格、员工技能、共同价值观是否匹配。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>想转型创新科技企业，但员工过去都是流水线工人（技能不足），且公司文化是“不求有功但求无过”（价值观），转型必败。</div>"
      },
      {
        id: "2-5",
        title: "空雨伞模型",
        summary: "汇报或做决策时，分离事实与主观情绪。",
        detail: "<h4>解决什么问题？</h4><p>解决汇报时只说现象不给方案，或凭主观臆断拍脑袋的问题。</p><h4>具体怎么做？</h4><ul><li><strong>空 (事实)：</strong>看到什么客观数据？</li><li><strong>雨 (解读)：</strong>推断出什么危机/机会？</li><li><strong>伞 (行动)：</strong>必须立刻做什么行动？</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>【空】APP年轻用户连续三天下降5%。【雨】说明新UI得罪了年轻人。【伞】马上开会决定回滚还是发补丁。</div>"
      },
      {
        id: "2-6",
        title: "SMART原则",
        summary: "布置任务或定目标，彻底杜绝“假大空”。",
        detail: "<h4>解决什么问题？</h4><p>解决立下“我要变得更好”的flag，结果无从下手的问题。</p><h4>具体怎么做？</h4><ul><li>目标必须：具体(Specific)、可衡量(Measurable)、可达成(Attainable)、相关(Relevant)、有时限(Time-bound)。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>错误：“我要学好英语”。正确：“为了拿外企Offer(相关)，12月底前(时限)，每天背50个单词(可衡量/可达成)，考过雅思7分(具体)。”</div>"
      },
      {
        id: "2-7",
        title: "决策矩阵",
        summary: "面对多个复杂选项时，用数学打分选最优解。",
        detail: "<h4>解决什么问题？</h4><p>解决选择困难症，或团队内部因偏好不同而吵架的问题。</p><h4>具体怎么做？</h4><ul><li>列出备选方案，确定影响决策的评估指标（如价格、质量）并分配权重。</li><li>给每个方案打分，计算加权总分。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>买车。动力(权3) 颜值(权4)。A车动力4颜值3总计24分；B车动力5颜值5总计35分。选B车。</div>"
      },
      {
        id: "2-8",
        title: "PM理论",
        summary: "自我评估管理能力，找到提升团队战斗力的突破口。",
        detail: "<h4>解决什么问题？</h4><p>解决领导抓业绩很猛但员工离职率极高，或者关系好但没业绩的问题。</p><h4>具体怎么做？</h4><ul><li><strong>P (目标达成)：</strong>追过程、要结果的能力。</li><li><strong>M (团队维持)：</strong>关心下属、调节矛盾的能力。</li><li>自我对号入座，缺啥补啥。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>高P低M的领导接手需要高度创意和心理安全感的研发团队，会导致全员抗拒，必须补足M能力。</div>"
      },
      {
        id: "2-9",
        title: "四象限时间管理(实战)",
        summary: "合理分配精力，不再被永远做不完的小事拖垮。",
        detail: "<h4>解决什么问题？</h4><p>懂了四象限理论，但实际操作时依然被琐事牵着鼻子走的问题。</p><h4>具体怎么做？</h4><ul><li>每天锁定精力最旺盛的2小时，只做“重要不紧急”的事。</li><li>对“紧急不重要”的事，学会冷酷地说“不”或往后推。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>早上头脑最清醒时做季度战略规划（重要不紧急），把扯皮邮件留到下班前集中回复（紧急不重要）。</div>"
      },
      {
        id: "2-10",
        title: "麦肯锡7步解决问题法",
        summary: "面对宏大毫无头绪的难题时，像手术刀一样精准破局。",
        detail: "<h4>解决什么问题？</h4><p>面对“利润下滑怎么办”，凭直觉瞎出主意的问题。</p><h4>具体怎么做？</h4><ul><li>界定边界 -> 逻辑树分解 -> 砍掉次要分支 -> 制定验证计划 -> 数据分析 -> 综合建议 -> 金字塔汇报。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>利润下滑。拆解为营收下降还是成本上升。排查发现是营销成本飙升。重点分析广告投放数据，逼近真相。</div>"
      }
    ]
  },
  {
    category: "3. 学习技巧",
    models: [
      {
        id: "3-1",
        title: "费曼技巧",
        summary: "快速吃透硬核知识，确保自己不是“假懂”。",
        detail: "<h4>解决什么问题？</h4><p>看书觉得都懂，一合书就忘，别人一问就哑口无言。</p><h4>具体怎么做？</h4><ul><li>用大白话，把概念解释给完全不懂的小孩听。</li><li>卡壳时回头查资料，不断简化语言直到小孩也能听懂。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>别说“量子纠缠是超距关联状态”。说“想象一双神奇的骰子，地球上掷出6，火星上的也会瞬间翻成6。”</div>"
      },
      {
        id: "3-2",
        title: "西蒙学习法",
        summary: "短时间内突击掌握一门全新的专业技能。",
        detail: "<h4>解决什么问题？</h4><p>学习三天打鱼两天晒网，几年依然停留在入门阶段。</p><h4>具体怎么做？</h4><ul><li>把学科拆分成小模块。</li><li>屏蔽干扰，6个月内高强度密集投入，逐个击破。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>别报“三年英语进阶班”。连续3个月每天封闭学习6小时，直接去考证。</div>"
      },
      {
        id: "3-3",
        title: "心流模式",
        summary: "进入极度专注、忘记时间的“开挂”状态。",
        detail: "<h4>解决什么问题？</h4><p>工作时容易分心、觉得无聊或者焦虑，效率极低。</p><h4>具体怎么做？</h4><ul><li>设定明确目标和即时反馈。</li><li>寻找任务难度与自身技能的平衡（太难会焦虑，太简单会无聊）。</li><li>消除所有外界打扰。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>打游戏容易上瘾是因为目标清晰、反馈即时、难度适中。工作也要这样设计。</div>"
      },
      {
        id: "3-4",
        title: "学习金字塔",
        summary: "破除“我很努力听课”的错觉，选择转化率最高的方法。",
        detail: "<h4>解决什么问题？</h4><p>听了很多课，但真正能运用的知识寥寥无几。</p><h4>具体怎么做？</h4><ul><li>摒弃听讲(留存5%)和阅读(留存10%)的被动学习。</li><li>尽量采用主动学习：参加讨论(50%)、真实实操(75%)、教给别人(90%)。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>看完书第二天直接在早会上用书里的方法做一次汇报，知识才真正长在脑子里。</div>"
      },
      {
        id: "3-5",
        title: "刻意练习",
        summary: "从“业余爱好者”进阶为高手，打破水平停滞。",
        detail: "<h4>解决什么问题？</h4><p>“明明练习了十年，为什么还是业余水平”的无效重复问题。</p><h4>具体怎么做？</h4><ul><li>走出舒适区，不重复已掌握的动作。</li><li>把技能拆解，针对最薄弱环节狂轰滥炸。</li><li>找教练提供即时反馈纠错。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>打高尔夫不是随意挥杆。找教练录像发现肩膀转动角度不对，接下来的一个月每天只练“转肩角度”。</div>"
      },
      {
        id: "3-6",
        title: "学习三区模型",
        summary: "评估当前状态，防止退化或崩溃。",
        detail: "<h4>解决什么问题？</h4><p>长期待在安逸环境能力退化，或接手过难任务精神崩溃。</p><h4>具体怎么做？</h4><ul><li><strong>舒适区：</strong>闭着眼能做好的事。</li><li><strong>学习区：</strong>有点吃力，需要踮脚尖的事（最佳成长区）。</li><li><strong>恐慌区：</strong>完全超出认知的事。主动寻找学习区的任务。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>普通文员给500人英文演讲是恐慌区；在10人会议做中文总结是学习区。</div>"
      },
      {
        id: "3-7",
        title: "巨人学习法",
        summary: "进入陌生领域时，少走弯路直击核心。",
        detail: "<h4>解决什么问题？</h4><p>盲目搜集碎片化信息，导致认知拼凑、不成体系。</p><h4>具体怎么做？</h4><ul><li>找出该领域最公认的顶级大师。</li><li>死磕他们的核心著作。</li><li>复制巨人的底层思维框架，再填充自己的细节。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>想学投资别看网文，直接读巴菲特致股东信、查理·芒格的书，站在巨人肩膀上。</div>"
      },
      {
        id: "3-8",
        title: "番茄工作法",
        summary: "对抗严重拖延症，强行启动注意力。",
        detail: "<h4>解决什么问题？</h4><p>面对复杂任务畏难，迟迟不肯动手。</p><h4>具体怎么做？</h4><ul><li>把大任务切小，设定25分钟定时器。</li><li>25分钟内绝对专注，不准碰手机。</li><li>闹钟响立刻休息5分钟。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>告诉自己：“我不需要写完报告，只要专注25分钟就好。” 大脑对短时间痛苦抗拒极低，容易启动。</div>"
      },
      {
        id: "3-9",
        title: "RIA阅读法",
        summary: "阅读实用类书籍，把知识变成行动。",
        detail: "<h4>解决什么问题？</h4><p>一年读了50本书，生活却没有发生任何改变。</p><h4>具体怎么做？</h4><ul><li><strong>R：</strong>挑选有触动的片段阅读。</li><li><strong>I：</strong>用自己的话重述片段意思。</li><li><strong>A：</strong>写下自己过去吃过的亏，以及明天具体该怎么把知识用上。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>读《非暴力沟通》，写下：“明天老公乱丢袜子，我尝试用公式对他说我的感受和具体请求。”</div>"
      },
      {
        id: "3-10",
        title: "遗忘曲线",
        summary: "科学规划复习时间，用最少精力达到永久记忆。",
        detail: "<h4>解决什么问题？</h4><p>考前突击死记硬背，考后一周忘得一干二净。</p><h4>具体怎么做？</h4><ul><li>遗忘最初最快，顺应曲线在临界点复习。</li><li>在学习后20分钟、12小时、1天、2天、4天、7天、15天复习。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>使用 Anki 等间隔重复软件，它会在你即将忘记的那天精准推送知识卡片给你复习。</div>"
      }
    ]
  },
  {
    category: "4. 认识自我",
    models: [
      {
        id: "4-1",
        title: "冰山理论",
        summary: "深入理解别人的极端情绪，不再停留在表面对骂。",
        detail: "<h4>解决什么问题？</h4><p>看不懂别人的极端行为，自己也控制不住无名火。</p><h4>具体怎么做？</h4><ul><li>海面上10%是行为和情绪。</li><li>海面下90%是：感受 -> 期待 -> 渴望 -> 核心自我。</li><li>去寻找对方水下什么“期待”落空了，而不是针对行为开炮。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>孩子撕卷子（行为）。水下感受是“羞愧”，期待是“想得到父母认可”，渴望是“被爱”。读懂水下才能解决问题。</div>"
      },
      {
        id: "4-2",
        title: "马斯洛需求层次",
        summary: "精准把握动机，进行有效的激励或谈判。",
        detail: "<h4>解决什么问题？</h4><p>跟挣扎在温饱线的人谈情怀，跟功成名就的人谈几百块加薪的错位问题。</p><h4>具体怎么做？</h4><ul><li>底层需求没满足时，人对高层需求无感。</li><li>洞察对方缺哪层（生理/安全/社交/尊重/自我实现），就提供哪层价值。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>管理新员工多发奖金最有效；管理行业大牛，给他极高Title和改变世界的愿景最有效。</div>"
      },
      {
        id: "4-3",
        title: "峰终效应",
        summary: "极低成本地大幅提升客户满意度。",
        detail: "<h4>解决什么问题？</h4><p>付出了100%努力，因为一点小瑕疵导致对方给差评。</p><h4>具体怎么做？</h4><ul><li>大脑只记住体验的最高峰和最终结局。</li><li>集中资源打造一个尖叫时刻（峰），策划一个完美的结束（终）。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>宜家路线复杂（负面体验），但有好吃便宜的肉丸（峰），出门有1元冰淇淋（终）。最后留在脑海的记忆就是体验极好。</div>"
      },
      {
        id: "4-4",
        title: "达克效应",
        summary: "保持自省，防止陷入“半桶水晃荡”的狂妄。",
        detail: "<h4>解决什么问题？</h4><p>刚懂点皮毛就觉得自己掌握了真理，做出愚蠢自信的决策。</p><h4>具体怎么做？</h4><ul><li>识别自己是否处于“愚昧之峰”。</li><li>主动阅读经典，滚入“绝望之谷”，承认自己无知，才能爬上“开悟之坡”。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>新手刚看两篇炒股文章就敢加杠杆满仓干（愚昧之峰），亏钱被套后才发现股市水太深（绝望之谷）。</div>"
      },
      {
        id: "4-5",
        title: "认知重建",
        summary: "在逆境中迅速拔出消极情绪，化阻力为动力。",
        detail: "<h4>解决什么问题？</h4><p>遇到打击时陷入抱怨、觉得“我完蛋了”的受害者心态。</p><h4>具体怎么做？</h4><ul><li>意识到引起崩溃的不是事件本身，而是你的消极信念。</li><li>用不同视角重新框架这件事，寻找其中隐藏的礼物。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>被裁员。消极信念：“我太差劲了。” 认知重建：“这个岗位本来就压榨，赔偿金刚好逼我去寻找真正想干的事业。”</div>"
      }
    ]
  },
  {
    category: "10. 更多模型(整合中)",
    models: [
      {
        id: "10-1",
        title: "第一性原理",
        summary: "抛弃世俗常理，推导最具颠覆性的创新解法。",
        detail: "<h4>解决什么问题？</h4><p>陷入“因为别人都这么做，所以我也这么做”的盲从思维。</p><h4>具体怎么做？</h4><ul><li>剥离所有现存假定，找到事物最核心的物理学/数学绝对真理。</li><li>基于真理重新向上构建解决方案。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>马斯克造火箭。别人说火箭很贵。他算出火箭原材料成本只占2%，于是决定自己造工厂重头拼装，把成本降到极低。</div>"
      },
      {
        id: "10-2",
        title: "逆向思维",
        summary: "常规思路走不通时，反向思考寻找突破口。",
        detail: "<h4>解决什么问题？</h4><p>总是问“怎么做才能成功”却依然失败。</p><h4>具体怎么做？</h4><ul><li>去问“怎么做才会彻底搞砸”。</li><li>把导致搞砸的所有行为列出来，在实际执行中绝对不去做这些蠢事。</li></ul><div class='example-box'><strong>💡 举个例子：</strong><br>查理·芒格：“如果我知道我会在哪里死去，我就永远不去那个地方。”</div>"
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const categoryTitle = document.getElementById('category-title');
    const modelsGrid = document.getElementById('models-grid');
    
    const modal = document.getElementById('model-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSummary = document.getElementById('modal-summary');
    const modalDetail = document.getElementById('modal-detail');
    const closeBtn = document.querySelector('.close-button');

    // Initialize sidebar
    modelsData.forEach((data, index) => {
        const li = document.createElement('li');
        li.textContent = data.category;
        li.dataset.index = index;
        li.addEventListener('click', () => loadCategory(index, li));
        categoryList.appendChild(li);
    });

    function loadCategory(index, listItem) {
        document.querySelectorAll('#category-list li').forEach(el => el.classList.remove('active'));
        if(listItem) {
            listItem.classList.add('active');
            listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        const categoryData = modelsData[index];
        categoryTitle.textContent = categoryData.category;
        
        modelsGrid.innerHTML = '';
        
        categoryData.models.forEach(model => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3 class="card-title">${model.title}</h3>
                <p class="card-summary">${model.summary}</p>
            `;
            card.addEventListener('click', () => openModal(model));
            modelsGrid.appendChild(card);
        });
        
        document.getElementById('main-content').scrollTop = 0;
    }

    function openModal(model) {
        modalTitle.textContent = model.title;
        modalSummary.textContent = model.summary;
        
        if (model.detail) {
            modalDetail.innerHTML = model.detail;
        } else {
            modalDetail.innerHTML = '<p>内容正在完善中...</p>';
        }
        
        modal.style.display = 'flex';
        void modal.offsetWidth;
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            modalDetail.innerHTML = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    if (modelsData.length > 0) {
        const firstCategoryItem = categoryList.firstElementChild;
        loadCategory(0, firstCategoryItem);
    }
});
