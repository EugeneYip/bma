import { useState } from "react";

/* ── Language System ── */
const texts = {
  zh: {
    guideStructure: "章節架構", courseContext: "課堂脈絡",
    coAuthorNote: "Sultan 教授是本文共同作者。她對每個細節都有第一手了解。課堂期待你準確掌握概念、機制、證據與管理意涵。",
    articleTag: "文章明確寫了什麼", inferenceTag: "合理推出的管理意涵",
    extensionTag: '教科書延伸 —「文章顯示 X，從 K&K 角度我連結到 Y。」',
    openingScripts: "開場腳本", coreArgument: "核心論點", logicFlow: "文章邏輯流程",
    spectrum: "善意光譜", studies: "兩項實證研究", steps: "五大管理步驟",
    comments: "課堂短評論", qa: "問答準備", kk: "教科書連結", cheatSheet: "最終速記",
    whatIsBenevolent: "什麼是善意型 App？",
    benevolentDef: "善意型 App 的價值不直接綁在產品銷售上，而是推進消費者利益，把顧客需求放在公司短期獲利前面。",
    pushGoal: "目標：促進銷售、推送優惠", pushStart: "出發點：公司的銷售目標",
    benGoal: "目標：幫助顧客、建立信任", benStart: "出發點：顧客的需求/困難",
    trustMech: "核心機制：信任",
    trustIntro: "信任建立在三個因素上（Bart, Shankar, Sultan & Urban, 2005）：",
    priorResearch: "Sultan 教授的先前研究",
    competenceDesc: "提供高品質產品/服務", confidenceDesc: "顧客相信公司會負責", benevolenceDesc: "企業把顧客利益放心上",
    keyClaim: "關鍵主張：mobile apps 特別適合傳達 benevolence。",
    trustSustain: "信任須由品質服務與透明溝通持續強化。無法永遠替弱產品擦屁股。",
    anchorExample: "錨定案例",
    seaTowDesc: "提供船主緊急拖吊與救援服務。",
    freeApp: "免費 App：", seaTowFeatures: "潮汐表、海洋天氣、GPS 座標、速度",
    counterintuitive: "反直覺：安全資訊降低事故＝削弱需求？文章反論——消費者感受善意 → 更信任 → 緊急時選 Sea Tow。",
    notAntiCommercial: "App 保留 emergency help slider → 先 customer welfare，再保留商業連結。並非反商業。",
    causalPath: "因果路徑", helpsNotSells: "幫助而非銷售", signalsBenev: "傳達善意",
    trustRises: "信任提升", brandConsidered: "品牌考慮", brandPreferred: "品牌偏好", willingnessToBuy: "購買意圖",
    evidenceNote: "文章 evidence 主要停留在態度與意向層面，而非長期已實現銷售。",
    notBinary: "非二元。Manager 有策略彈性。信任策略 → 最右端。促銷導向 → 從左往右演進。",
    nationwideNote: "Nationwide 在正文討論但未出現在光譜圖上。",
    peopleMoving: "搬家中的人",
    keyInsight: "關鍵洞見：賣汽車/房屋/財產保險——不賣搬家保險。最純粹的善意展示。",
    goodwill: "善意轉化：最後一頁連結 agents。物品已編目 → 簡化申請。先 customer value，再 credible bridge。",
    housingApp: "住宅/財務規劃 App", homeFeatures: "住宅選擇 + 預算顧問 + 貸款資訊",
    appNameNote: "App 名稱不一致：正文 \"Dream Mover\"，研究框 \"Dream Move\"。最穩：「駿河銀行的住宅及財務規劃 App」。",
    crossCultural: "跨文化：美日均正面 → 多元文化適用 → 全球品牌。",
    keyNumbers: "關鍵數字", actionOrientation: "Sultan 教授重視 action orientation。以下是文章的直接管理建議。",
    step1: "決定善意程度", step1d: "顧客需要什麼資訊？什麼服務？如何簡化？獨特、有用、有技術支撐。保留清楚品牌連結。信任策略 → 最右端。",
    step2: "像新產品一樣設計", step2d: "不是 IT 任務。Go/no-go 決策點、焦點座談。LM：完整版 vs. 精簡版 → 選精簡。駿河：3 場焦點座談。",
    step3: "與用戶測試", step3d: "完美且相關——故障傷害信任。了解如何創造價值 + 建立品牌心理連結。可能需要 2.0。",
    step4: "配合行銷支援上市", step4d: "如同新產品上市。知名度不會自動產生。專門預算。百萬+ App → 無廣告則隱形。",
    step5: "連結整體媒體策略", step5d: "作為信任策略一部分。文章：「其他媒體也很重要」→ 最佳化媒體組合。",
    doNotSay: "不要說「App 取代傳統媒體」。",
    cmt1: "提供 mechanism。Benevolence 強化 trust → 品牌必須先進入 consideration set。",
    cmt2: "並非反商業。LM 為其他保險產品建立 bridge。先 customer value，但仍有商業關聯。",
    cmt3: "Manager 依品牌與競爭情境選擇適合的善意程度。非二元。",
    cmt4: "Evidence 強但主要測態度/意向。是 strategic potential 的強支持，非長期 sales 的最終 proof。",
    cmt5: "部分是產品設計（utility）、部分是溝通（信任）、部分是 CRM（售前關係）。",
    cmt5note: "你的課程延伸，不是文章原話。",
    q1q: "什麼是善意型 App？", q1a: "價值不綁在 selling 上，而是幫消費者做決策，consumer interests 優先。",
    q2q: "和 push app 有何不同？", q2a: "Push = 銷售+促銷。Benevolent = 先幫顧客。Selling vs. customer orientation。",
    q3q: "核心機制？", q3a: "Trust = competence + confidence + benevolence。Apps 傳達 benevolence → trust ↑ → 考慮/偏好/購買 ↑。",
    q4q: "有何證據？", q4a: "兩項研究，前後測+控制組。LM：+24% 考慮、+14% 購買、偏好 ≈2×。駿河：考慮 2.26×、偏好 3×。Forced-exposure。",
    q5q: "Manager 該怎麼做？", q5a: "五步：善意程度 → NPD 設計 → 測試 → 行銷支援上市 → 媒體策略。非獨立策略。",
    q6q: "研究限制？", q6a: "Forced-exposure；態度/意向而非長期 sales。「Strong indications」非最終 proof。Benevolence 必須可信。",
    q7q: "為何 Liberty Mutual 最具代表性？", q7a: "不賣搬家保險。最純粹的善意展示。好處 = 信任 + 下游品牌效果。",
    q8q: "跨文化適用？", q8a: "美日均正面。多元文化情境 → 全球品牌適用。",
    kkNote: "課程延伸，非文章原話。句型：「文章顯示 X。從 K&K 角度，我連結到 Y。」",
    ch11d: "第五步明確討論整體媒體支出。", ch10d: "第二步：「像新產品設計，有 go/no-go。」",
    ch5d: "研究測量 consideration → preference → purchase intent。",
    ch8d: "邏輯一致但未用 Keller 術語。", ch4d: "信任建立與忠誠度相關。", ch7d: "善意 App 作為差異化策略。",
    coreIdea: "核心觀點", coreIdeaV: "App 建立信任，不只推銷",
    trustF: "信任公式", benApp: "善意 App", benAppV: "先幫助；之後才談銷售",
    spectrumL: "光譜", bestEx: "最佳案例", bestExV: "不賣搬家險",
    anchor: "錨定案例", anchorV: "安全 + 緊急滑桿",
    crossCulturalL: "跨文化", crossCulturalV: "美日 → 全球品牌",
    fiveStepsL: "五步驟", mediaL: "媒體提醒", mediaV: "不是「取代」→ 最佳化組合",
    critiqueL: "批判", critiqueV: "態度/意向非 sales。「Strong indications」。",
    caveatL: "提醒", caveatV: "必須可信。無法替弱產品擦屁股。",
    sp1: "產品推銷", sp2: "便利性", sp3: "娛樂", sp4: "產品輔助", sp5: "善意服務",
    competence: "能力", confidence: "信心", benevolence: "善意",
  },
  vi: {
    guideStructure: "Cấu trúc", courseContext: "Bối cảnh lớp học",
    coAuthorNote: "Giáo sư Sultan là đồng tác giả. Bà nắm rõ mọi chi tiết. Lớp yêu cầu nắm chính xác khái niệm, cơ chế, bằng chứng và hàm ý quản lý.",
    articleTag: "Bài viết nêu rõ", inferenceTag: "Suy luận quản lý hợp lý",
    extensionTag: 'Mở rộng giáo trình — "Bài viết cho thấy X. Theo K&K, tôi liên hệ với Y."',
    openingScripts: "Kịch bản mở đầu", coreArgument: "Luận điểm cốt lõi", logicFlow: "Luồng logic",
    spectrum: "Phổ thiện chí", studies: "Hai nghiên cứu", steps: "Năm bước quản lý",
    comments: "Bình luận sẵn dùng", qa: "Hỏi đáp", kk: "Liên kết giáo trình", cheatSheet: "Tóm tắt nhanh",
    whatIsBenevolent: "App thiện chí là gì?",
    benevolentDef: "App có giá trị không gắn trực tiếp với bán hàng mà thúc đẩy lợi ích người tiêu dùng, đặt nhu cầu khách hàng trước lợi nhuận ngắn hạn.",
    pushGoal: "Mục tiêu: thúc đẩy doanh số", pushStart: "Xuất phát: mục tiêu bán hàng của công ty",
    benGoal: "Mục tiêu: giúp đỡ khách hàng, xây dựng niềm tin", benStart: "Xuất phát: nhu cầu/khó khăn của khách",
    trustMech: "Cơ chế cốt lõi: Niềm tin",
    trustIntro: "Niềm tin dựa trên ba yếu tố (Bart, Shankar, Sultan & Urban, 2005):",
    priorResearch: "Nghiên cứu trước của GS Sultan",
    competenceDesc: "Sản phẩm/dịch vụ chất lượng cao", confidenceDesc: "Khách tin tưởng công ty", benevolenceDesc: "Nhà cung cấp quan tâm lợi ích khách",
    keyClaim: "Luận điểm chính: mobile apps đặc biệt hiệu quả trong việc thể hiện thiện chí.",
    trustSustain: "Niềm tin cần được duy trì bằng dịch vụ chất lượng và giao tiếp minh bạch. Không thể bù đắp cho sản phẩm yếu mãi.",
    anchorExample: "Ví dụ tiêu biểu",
    seaTowDesc: "Dịch vụ kéo và cứu hộ tàu thuyền khẩn cấp.",
    freeApp: "App miễn phí:", seaTowFeatures: "bảng thủy triều · thời tiết biển · GPS · tốc độ",
    counterintuitive: "Phản trực giác: thông tin an toàn giảm tai nạn = giảm nhu cầu? Bài viết lập luận ngược lại — người dùng cảm nhận thiện chí → tin tưởng hơn → chọn Sea Tow khi khẩn cấp.",
    notAntiCommercial: "App giữ nút trượt cứu hộ khẩn cấp → phúc lợi khách trước, thương mại sau. Không phản thương mại.",
    causalPath: "Đường nhân quả", helpsNotSells: "Giúp đỡ, không bán", signalsBenev: "Thể hiện thiện chí",
    trustRises: "Niềm tin tăng", brandConsidered: "Cân nhắc thương hiệu", brandPreferred: "Ưa thích thương hiệu", willingnessToBuy: "Ý định mua",
    evidenceNote: "Bằng chứng chủ yếu đo thái độ/ý định, không phải doanh số dài hạn thực tế.",
    notBinary: "Không nhị phân. Nhà quản lý có sự linh hoạt chiến lược. Chiến lược niềm tin → cực phải. Khuyến mại → tiến từ trái sang phải.",
    nationwideNote: "Nationwide được thảo luận trong văn bản nhưng không hiển thị trên hình phổ.",
    peopleMoving: "Người đang chuyển nhà",
    keyInsight: "Bán bảo hiểm ô tô/nhà/tài sản — không bán bảo hiểm chuyển nhà. Thiện chí thuần túy nhất.",
    goodwill: "Màn hình cuối liên kết đại lý. Tài sản đã được liệt kê → đơn giản hóa đăng ký. Giá trị khách hàng trước + cầu nối đáng tin.",
    housingApp: "App nhà ở/tài chính", homeFeatures: "Chọn nhà + tư vấn ngân sách + thông tin vay",
    appNameNote: "Tên app khác nhau: \"Dream Mover\" vs \"Dream Move.\" An toàn nhất: \"App nhà ở và lập kế hoạch tài chính của Suruga Bank.\"",
    crossCultural: "Đa văn hóa: Mỹ + Nhật đều tích cực → bối cảnh văn hóa đa dạng → thương hiệu toàn cầu.",
    keyNumbers: "Số liệu quan trọng", actionOrientation: "GS Sultan nhấn mạnh định hướng hành động. Đây là chỉ dẫn trực tiếp từ bài viết.",
    step1: "Quyết định mức thiện chí", step1d: "Khách cần thông tin gì? Dịch vụ gì? Làm sao đơn giản hóa? Độc đáo, hữu ích, có công nghệ. Giữ liên kết thương hiệu rõ ràng.",
    step2: "Thiết kế như sản phẩm mới", step2d: "Không phải việc IT. Các bước go/no-go, nhóm tập trung. LM: nặng vs nhẹ → chọn đơn giản. Suruga: 3 nhóm.",
    step3: "Thử nghiệm với người dùng", step3d: "Hoàn hảo & phù hợp — lỗi làm suy giảm niềm tin. Hiểu cách app tạo giá trị + liên kết tâm lý thương hiệu.",
    step4: "Ra mắt với hỗ trợ marketing", step4d: "= ra mắt sản phẩm mới. Nhận thức không tự động. Ngân sách riêng. 1M+ app → vô hình nếu không quảng cáo.",
    step5: "Liên kết với chiến lược truyền thông", step5d: "Một phần chiến lược xây dựng niềm tin. \"Các phương tiện khác cũng quan trọng\" → tối ưu hóa.",
    doNotSay: "KHÔNG nói \"app thay thế truyền thông truyền thống.\"",
    cmt1: "Đưa ra cơ chế. Thiện chí củng cố niềm tin → thương hiệu phải vào tập cân nhắc.",
    cmt2: "Không phản thương mại. LM tạo cầu nối đến sản phẩm khác. Giá trị khách trước, vẫn có liên quan kinh doanh.",
    cmt3: "Nhà quản lý chọn mức phù hợp cho thương hiệu và bối cảnh cạnh tranh.",
    cmt4: "Bằng chứng mạnh nhưng chủ yếu đo thái độ/ý định. Tiềm năng chiến lược, không phải bằng chứng cuối cùng.",
    cmt5: "Một phần thiết kế sản phẩm, một phần truyền thông, một phần CRM.",
    cmt5note: "Mở rộng khóa học, không phải ngôn ngữ bài viết.",
    q1q: "App thiện chí là gì?", q1a: "Giá trị không gắn với bán hàng mà giúp người tiêu dùng — đặt lợi ích họ trước.",
    q2q: "Khác push app thế nào?", q2a: "Push = bán + khuyến mại. Thiện chí = giúp trước. Định hướng bán vs khách hàng.",
    q3q: "Cơ chế chính?", q3a: "Niềm tin = năng lực + tin tưởng + thiện chí. App thể hiện thiện chí → niềm tin ↑ → cân nhắc/ưa thích/mua ↑.",
    q4q: "Bằng chứng?", q4a: "Hai nghiên cứu, trước/sau + đối chứng. LM: +24% cân nhắc, +14% mua, ưa thích ≈2×. Suruga: 2.26× cân nhắc, 3× ưa thích.",
    q5q: "Nhà quản lý nên làm gì?", q5a: "5 bước: mức độ → thiết kế NPD → thử nghiệm → ra mắt + ngân sách → chiến lược truyền thông. Không độc lập.",
    q6q: "Hạn chế?", q6a: "Phơi nhiễm bắt buộc; thái độ/ý định không phải doanh số dài hạn. \"Dấu hiệu mạnh\" không phải bằng chứng. Thiện chí phải đáng tin.",
    q7q: "Tại sao Liberty Mutual mạnh nhất?", q7a: "Không bán bảo hiểm chuyển nhà. Thiện chí thuần túy nhất. Lợi ích = niềm tin + hiệu ứng thương hiệu.",
    q8q: "Đa văn hóa?", q8a: "Mỹ + Nhật đều tích cực. Bối cảnh văn hóa đa dạng → thương hiệu toàn cầu.",
    kkNote: "Mở rộng khóa học. \"Bài viết cho thấy X. Theo K&K, tôi liên hệ với Y.\"",
    ch11d: "Bước 5 thảo luận chi tiêu truyền thông.", ch10d: "Bước 2: \"thiết kế như sản phẩm mới, go/no-go.\"",
    ch5d: "Nghiên cứu đo cân nhắc → ưa thích → ý định mua.",
    ch8d: "Logic nhất quán nhưng không dùng thuật ngữ Keller.", ch4d: "Xây dựng niềm tin liên quan đến trung thành.", ch7d: "App thiện chí như chiến lược khác biệt hóa.",
    coreIdea: "Ý tưởng cốt lõi", coreIdeaV: "App xây dựng niềm tin, không chỉ bán",
    trustF: "Công thức niềm tin", benApp: "App thiện chí", benAppV: "Giúp trước; bán sau nếu có",
    spectrumL: "Phổ", bestEx: "Ví dụ tốt nhất", bestExV: "Không bán bảo hiểm chuyển nhà",
    anchor: "Ví dụ neo", anchorV: "An toàn + nút cứu hộ",
    crossCulturalL: "Đa văn hóa", crossCulturalV: "Mỹ + Nhật → toàn cầu",
    fiveStepsL: "5 bước", mediaL: "Lưu ý truyền thông", mediaV: "Không \"thay thế\" → tối ưu hóa",
    critiqueL: "Phê bình", critiqueV: "Thái độ/ý định không phải doanh số. \"Dấu hiệu mạnh.\"",
    caveatL: "Lưu ý", caveatV: "Phải đáng tin. Không sửa được sản phẩm yếu.",
    sp1: "Đẩy sản phẩm", sp2: "Tiện lợi", sp3: "Giải trí", sp4: "Hỗ trợ SP", sp5: "Dịch vụ thiện chí",
    competence: "Năng lực", confidence: "Tin tưởng", benevolence: "Thiện chí",
  },
  hi: {
    guideStructure: "गाइड संरचना", courseContext: "कोर्स संदर्भ",
    coAuthorNote: "प्रोफेसर सुल्तान सह-लेखक हैं। वे हर विवरण जानती हैं। कक्षा में अवधारणाओं, तंत्रों, प्रमाणों और प्रबंधकीय निहितार्थों की सटीक समझ अपेक्षित है।",
    articleTag: "लेख में स्पष्ट रूप से कहा गया", inferenceTag: "उचित प्रबंधकीय निहितार्थ",
    extensionTag: 'पाठ्यपुस्तक विस्तार — "लेख X दिखाता है। K&K के अनुसार, मैं Y से जोड़ूँगा।"',
    openingScripts: "ओपनिंग स्क्रिप्ट", coreArgument: "मूल तर्क", logicFlow: "तर्क प्रवाह",
    spectrum: "परोपकार स्पेक्ट्रम", studies: "दो अनुभवजन्य अध्ययन", steps: "पाँच प्रबंधकीय कदम",
    comments: "तैयार टिप्पणियाँ", qa: "प्रश्नोत्तर", kk: "K&K कनेक्शन", cheatSheet: "अंतिम सारांश",
    whatIsBenevolent: "परोपकारी ऐप क्या है?",
    benevolentDef: "ऐसे ऐप जिनका मूल्य उत्पाद बेचने से सीधे नहीं जुड़ा, बल्कि उपभोक्ताओं के हितों को आगे बढ़ाने और कंपनी के अल्पकालिक लाभ से पहले उनकी जरूरतों की वकालत करने से है।",
    pushGoal: "लक्ष्य: बिक्री बढ़ाना, डील प्रचारित करना", pushStart: "शुरुआती बिंदु: कंपनी का बिक्री उद्देश्य",
    benGoal: "लक्ष्य: ग्राहकों की मदद, विश्वास निर्माण", benStart: "शुरुआती बिंदु: ग्राहक की जरूरत/कठिनाई",
    trustMech: "मूल तंत्र: विश्वास",
    trustIntro: "विश्वास तीन कारकों पर बनता है (Bart, Shankar, Sultan & Urban, 2005):",
    priorResearch: "सुल्तान का पूर्व शोध",
    competenceDesc: "उच्च गुणवत्ता उत्पाद/सेवा", confidenceDesc: "ग्राहक कंपनी पर भरोसा करते हैं", benevolenceDesc: "प्रदाता ग्राहक हित को ध्यान में रखता है",
    keyClaim: "मुख्य दावा: मोबाइल ऐप परोपकार का संकेत देने में विशेष रूप से प्रभावी हैं।",
    trustSustain: "विश्वास को गुणवत्ता सेवा और पारदर्शी संवाद से बनाए रखना चाहिए। कमजोर उत्पादों की भरपाई हमेशा नहीं कर सकता।",
    anchorExample: "एंकर उदाहरण",
    seaTowDesc: "नाव मालिकों के लिए आपातकालीन टोइंग और बचाव सेवा।",
    freeApp: "मुफ्त ऐप:", seaTowFeatures: "ज्वार तालिकाएँ · समुद्री मौसम · GPS · गति",
    counterintuitive: "प्रतिसहज: सुरक्षा जानकारी दुर्घटनाएँ कम करती है = कम माँग? लेख विपरीत तर्क देता है — उपभोक्ता परोपकार महसूस करते हैं → अधिक विश्वास → आपातकाल में Sea Tow चुनते हैं।",
    notAntiCommercial: "ऐप में आपातकालीन सहायता स्लाइडर है → पहले ग्राहक कल्याण, व्यावसायिक प्रासंगिकता पृष्ठभूमि में। वाणिज्य-विरोधी नहीं।",
    causalPath: "कारण मार्ग", helpsNotSells: "मदद करता है, बेचता नहीं", signalsBenev: "परोपकार का संकेत",
    trustRises: "विश्वास बढ़ता है", brandConsidered: "ब्रांड विचार", brandPreferred: "ब्रांड वरीयता", willingnessToBuy: "खरीद इरादा",
    evidenceNote: "प्रमाण मुख्य रूप से दृष्टिकोण/इरादे को मापता है, दीर्घकालिक वास्तविक बिक्री नहीं।",
    notBinary: "द्विआधारी नहीं। प्रबंधकों के पास रणनीतिक लचीलापन है। विश्वास रणनीति → दाईं ओर। प्रचार → बाएँ से दाएँ।",
    nationwideNote: "Nationwide पाठ में चर्चा की गई लेकिन स्पेक्ट्रम चित्र पर नहीं।",
    peopleMoving: "स्थानांतरित हो रहे लोग",
    keyInsight: "ऑटो/गृह/संपत्ति बीमा बेचता है — स्थानांतरण बीमा नहीं बेचता। सबसे शुद्ध परोपकार।",
    goodwill: "अंतिम स्क्रीन एजेंटों से जोड़ती है। सामान सूचीबद्ध → आवेदन सरल। पहले ग्राहक मूल्य + विश्वसनीय पुल।",
    housingApp: "आवास/वित्तीय ऐप", homeFeatures: "घर चयन + बजट सलाहकार + ऋण जानकारी",
    appNameNote: "ऐप नाम भिन्न: \"Dream Mover\" vs \"Dream Move.\" सबसे सुरक्षित: \"Suruga Bank का आवास और वित्तीय-योजना ऐप।\"",
    crossCultural: "बहुसांस्कृतिक: अमेरिका + जापान दोनों सकारात्मक → विविध सांस्कृतिक संदर्भ → वैश्विक ब्रांड।",
    keyNumbers: "मुख्य संख्याएँ", actionOrientation: "सुल्तान कार्य अभिविन्यास पर जोर देती हैं। ये लेख के प्रत्यक्ष निर्देश हैं।",
    step1: "परोपकार स्तर तय करें", step1d: "ग्राहकों को क्या जानकारी चाहिए? कौन सी सेवा? कैसे सरल बनाएँ? अद्वितीय, उपयोगी। स्पष्ट ब्रांड लिंक रखें।",
    step2: "नए उत्पाद की तरह डिज़ाइन करें", step2d: "IT कार्य नहीं। Go/no-go चरण, फोकस समूह। LM: भारी vs हल्का → सरल चुना। Suruga: 3 फोकस समूह।",
    step3: "उपयोगकर्ताओं के साथ परीक्षण", step3d: "दोषरहित और प्रासंगिक — गड़बड़ियाँ विश्वास को कम करती हैं। मनोवैज्ञानिक ब्रांड लिंक समझें।",
    step4: "मार्केटिंग सहायता से लॉन्च", step4d: "= नया उत्पाद लॉन्च। जागरूकता स्वचालित नहीं। समर्पित बजट। 10 लाख+ ऐप → विज्ञापन के बिना अदृश्य।",
    step5: "समग्र मीडिया रणनीति से जोड़ें", step5d: "विश्वास-निर्माण रणनीति का हिस्सा। \"अन्य मीडिया भी महत्वपूर्ण\" → अनुकूलित मिश्रण।",
    doNotSay: "\"ऐप पारंपरिक मीडिया की जगह लेते हैं\" मत कहें।",
    cmt1: "तंत्र देता है। परोपकार विश्वास मजबूत करता है → ब्रांड को विचार समूह में प्रवेश करना चाहिए।",
    cmt2: "वाणिज्य-विरोधी नहीं। LM ने अन्य उत्पादों के लिए पुल बनाया। पहले ग्राहक मूल्य, व्यावसायिक प्रासंगिकता भी।",
    cmt3: "प्रबंधक ब्रांड और प्रतिस्पर्धी संदर्भ के लिए सही स्तर चुनते हैं।",
    cmt4: "मजबूत प्रमाण लेकिन मुख्य रूप से दृष्टिकोण/इरादा। रणनीतिक क्षमता, दीर्घकालिक बिक्री का अंतिम प्रमाण नहीं।",
    cmt5: "आंशिक रूप से उत्पाद डिज़ाइन, आंशिक रूप से संवाद, आंशिक रूप से CRM।",
    cmt5note: "आपका कोर्स विस्तार, लेख की भाषा नहीं।",
    q1q: "परोपकारी ऐप क्या है?", q1a: "मूल्य बेचने से नहीं बल्कि उपभोक्ताओं की मदद से जुड़ा — उनके हित पहले।",
    q2q: "पुश ऐप से कैसे अलग?", q2a: "पुश = बिक्री + डील। परोपकारी = पहले मदद। बिक्री vs ग्राहक अभिविन्यास।",
    q3q: "मुख्य तंत्र?", q3a: "विश्वास = योग्यता + भरोसा + परोपकार। ऐप परोपकार का संकेत → विश्वास ↑ → विचार/वरीयता/खरीद ↑।",
    q4q: "प्रमाण?", q4a: "दो अध्ययन, पूर्व/पश्चात + नियंत्रण। LM: +24% विचार, +14% खरीद, वरीयता ≈2×। Suruga: 2.26× विचार, 3× वरीयता।",
    q5q: "प्रबंधकों को क्या करना चाहिए?", q5a: "5 कदम: स्तर → NPD डिज़ाइन → परीक्षण → बजट से लॉन्च → मीडिया रणनीति। स्वतंत्र नहीं।",
    q6q: "सीमाएँ?", q6a: "बाध्य प्रदर्शन; दृष्टिकोण/इरादा, दीर्घकालिक बिक्री नहीं। \"मजबूत संकेत\" प्रमाण नहीं। परोपकार विश्वसनीय होना चाहिए।",
    q7q: "Liberty Mutual सबसे मजबूत क्यों?", q7a: "स्थानांतरण बीमा नहीं बेचता। सबसे शुद्ध परोपकार। लाभ = विश्वास + डाउनस्ट्रीम ब्रांड प्रभाव।",
    q8q: "बहुसांस्कृतिक?", q8a: "अमेरिका + जापान दोनों सकारात्मक। विविध सांस्कृतिक संदर्भ → वैश्विक ब्रांड।",
    kkNote: "कोर्स विस्तार। \"लेख X दिखाता है। K&K से, मैं Y से जोड़ूँगा।\"",
    ch11d: "चरण 5 समग्र मीडिया व्यय पर चर्चा करता है।", ch10d: "चरण 2: \"नए उत्पाद की तरह डिज़ाइन, go/no-go।\"",
    ch5d: "अध्ययन विचार → वरीयता → खरीद इरादा मापते हैं।",
    ch8d: "तर्क सुसंगत लेकिन Keller की शब्दावली नहीं।", ch4d: "विश्वास-निर्माण वफादारी से संबंधित।", ch7d: "परोपकारी ऐप विभेदीकरण के रूप में।",
    coreIdea: "मूल विचार", coreIdeaV: "ऐप विश्वास बनाते हैं, सिर्फ बिक्री नहीं",
    trustF: "विश्वास सूत्र", benApp: "परोपकारी ऐप", benAppV: "पहले मदद; बाद में बिक्री",
    spectrumL: "स्पेक्ट्रम", bestEx: "सर्वोत्तम उदाहरण", bestExV: "स्थानांतरण बीमा नहीं",
    anchor: "एंकर", anchorV: "सुरक्षा + आपातकालीन स्लाइडर",
    crossCulturalL: "बहुसांस्कृतिक", crossCulturalV: "अमेरिका + जापान → वैश्विक",
    fiveStepsL: "5 कदम", mediaL: "मीडिया चेतावनी", mediaV: "\"प्रतिस्थापन\" नहीं → अनुकूलित मिश्रण",
    critiqueL: "आलोचना", critiqueV: "दृष्टिकोण/इरादा, बिक्री नहीं। \"मजबूत संकेत।\"",
    caveatL: "चेतावनी", caveatV: "विश्वसनीय होना चाहिए। कमजोर उत्पाद ठीक नहीं कर सकता।",
    sp1: "उत्पाद पुश", sp2: "सुविधा", sp3: "मनोरंजन", sp4: "उत्पाद सहायता", sp5: "परोपकारी सेवा",
    competence: "योग्यता", confidence: "भरोसा", benevolence: "परोपकार",
  },
};

const en = {
  guideStructure: "Guide Structure", courseContext: "Course Context",
  coAuthorNote: "Professor Sultan is a co-author. She knows every detail. Expect precise mastery of concepts, mechanisms, evidence, and managerial implications.",
  articleTag: "What the article explicitly states", inferenceTag: "Reasonable managerial implication",
  extensionTag: 'Textbook — "The article shows X. From K&K, I\'d connect to Y."',
};

const col = { navy: "#1B3A5C", red: "#A31F34", gold: "#B8880E", green: "#267348", purple: "#53378A" };

const langOptions = [
  { key: "en-zh", label: "EN/中" },
  { key: "en", label: "EN" },
  { key: "zh", label: "中" },
  { key: "en-vi", label: "EN/Vi" },
  { key: "en-hi", label: "EN/हि" },
];

export default function App() {
  const [lang, setLang] = useState("en-zh");
  const [open, setOpen] = useState(false);

  // t(key) returns bilingual or single language text
  const L = lang.split("-")[1] || (lang === "en" ? null : lang); // secondary lang code
  const isEnOnly = lang === "en";
  const isSecOnly = !lang.includes("en") && L;
  const dict = L ? texts[L] : null;

  const t = (enText, key) => {
    if (!key || !dict) return enText;
    const localized = dict[key];
    if (isSecOnly) return localized || enText;
    if (isEnOnly) return enText;
    // bilingual
    return <>{enText} <span style={{ color: "#8A7E6E", fontSize: "0.92em" }}>{localized}</span></>;
  };

  // For JSX content that can't use keys
  const tx = (enJsx, key) => {
    if (!key || !dict) return enJsx;
    const loc = dict[key];
    if (isSecOnly) return loc || enJsx;
    if (isEnOnly) return enJsx;
    return <>{enJsx} <span style={{ color: "#8A7E6E", fontSize: "0.92em" }}>{loc}</span></>;
  };

  const Tag = ({ type, children }) => {
    const s = { g: { background: "#E4F2E8", color: col.green }, a: { background: "#FFF4D4", color: "#6E5A18" }, p: { background: "#ECE4F6", color: col.purple }, r: { background: "#FCE6E6", color: col.red } };
    return <span style={{ ...s[type], display: "inline-block", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, verticalAlign: "middle" }}>{children}</span>;
  };
  const Bdg = ({ color: bg, children }) => <span style={{ background: bg, color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, marginLeft: 6, verticalAlign: "middle" }}>{children}</span>;
  const Cd = ({ children, style }) => <div style={{ background: "#fff", border: "1px solid #DDD8CE", borderRadius: 14, padding: "24px 26px", marginBottom: 16, overflowWrap: "break-word", ...style }}>{children}</div>;
  const Co = ({ type, children }) => { const s = { w: { background: "#FFFAEF", border: "1px solid #E6D2A0", color: "#6E5A18" }, i: { background: "#EDF3FA", border: "1px solid #BED0E6", color: "#164272" }, g: { background: "#EDF7F0", border: "1px solid #ACD8BC", color: "#185838" } }; return <div style={{ ...s[type], borderRadius: 11, padding: "15px 20px", margin: "14px 0", fontSize: 13, lineHeight: 1.76 }}>{children}</div>; };
  const Sh = ({ letter, bg, en: enT, lk }) => <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, paddingBottom: 12, borderBottom: "2px solid #DDD8CE" }}><div style={{ width: 38, height: 38, borderRadius: 9, background: bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, flexShrink: 0 }}>{letter}</div><div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section {letter}</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t(enT, lk)}</h2></div></div>;
  const Sb = ({ label, color: clr, children }) => <div style={{ background: "#fff", border: "1px solid #DDD8CE", borderLeft: `5px solid ${clr}`, borderRadius: 14, padding: "24px 26px", marginBottom: 16, position: "relative" }}><div style={{ position: "absolute", top: -10, left: 18, background: "#F9F5EE", padding: "1px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", borderRadius: 4, border: "1px solid #DDD8CE", color: clr }}>{label}</div><div style={{ fontSize: 14, lineHeight: 1.9, color: "#3E3828" }}>{children}</div></div>;
  const Stp = ({ n, enTitle, lk, children }) => <div style={{ display: "flex", gap: 18, marginBottom: 20, alignItems: "flex-start" }}><div style={{ width: 34, height: 34, borderRadius: "50%", background: col.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flexShrink: 0 }}>{n}</div><div><div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{t(enTitle, lk)}</div><div style={{ fontSize: 13, color: "#625A4A", lineHeight: 1.76 }}>{children}</div></div></div>;
  const Cm = ({ label, children, note }) => <div style={{ background: "#fff", borderLeft: `4px solid ${col.purple}`, borderRadius: "0 12px 12px 0", padding: "15px 20px", marginBottom: 12 }}><div style={{ fontSize: 11, fontWeight: 700, color: col.purple, letterSpacing: 0.5, marginBottom: 4 }}>{label}</div><div style={{ fontSize: 13.5, color: "#3E3828", lineHeight: 1.76 }}>{children}</div>{note && <div style={{ fontSize: 12, color: "#6E5A18", marginTop: 5, paddingTop: 5, borderTop: "1px dashed #DDD8CE" }}>{note}</div>}</div>;
  const Qa = ({ n, q, a }) => <div style={{ background: n % 2 === 0 ? "#FEFCF8" : "#fff", border: "1px solid #DDD8CE", borderRadius: 12, padding: "16px 20px", marginBottom: 14, display: "flex", gap: 14, flexWrap: "wrap" }}><div style={{ width: 28, height: 28, borderRadius: 7, background: col.gold, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{n}</div><div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 14, fontWeight: 700, color: col.navy, marginBottom: 6 }}>{q}</div><div style={{ fontSize: 13.5, color: "#3E3828", lineHeight: 1.76 }}>{a}</div></div></div>;
  const Tb = ({ ch, name, str, lk }) => <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 0", borderBottom: "1px solid #DDD8CE", flexWrap: "wrap" }}><span style={{ background: "#ECE4F6", color: col.purple, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 5, whiteSpace: "nowrap" }}>{ch}</span><div style={{ flex: 1, minWidth: 0 }}><strong>{name}</strong><span style={{ fontSize: 9.5, fontWeight: 700, borderRadius: 3, padding: "2px 7px", marginLeft: 6, background: str === "Strong" ? "#E4F2E8" : "#FFF4D4", color: str === "Strong" ? col.green : "#6E5A18" }}>{str}</span><p style={{ fontSize: 12, color: "#625A4A", marginTop: 2 }}>{t(null, lk) || ""}</p></div></div>;
  const Dv = () => <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #DDD8CE, transparent)", margin: "40px 0" }} />;
  const Th = ({ children }) => <th style={{ background: "#F3EEE6", color: col.navy, fontWeight: 700, padding: "10px 14px", textAlign: "left", fontSize: 11 }}>{children}</th>;
  const Td = ({ children, ...p }) => <td style={{ padding: "10px 14px", borderTop: "1px solid #DDD8CE", fontSize: 13, ...p.style }}>{children}</td>;
  const Hl = ({ children }) => <span style={{ color: col.green, fontWeight: 700 }}>{children}</span>;

  const specData = [
    { en: "Product Push", lk: "sp1", ex: "Staples · Domino's · Zappos", bg: "#E8B4B4", fg: "#6B1818", dir: "← SELL" },
    { en: "Convenience", lk: "sp2", ex: "GasBuddy · Foursquare", bg: "#EDDCAA", fg: "#6B4D0A" },
    { en: "Entertainment", lk: "sp3", ex: "Chipotle Scarecrow", bg: "#C8E0B4", fg: "#2E5414" },
    { en: "Product Assist", lk: "sp4", ex: "Kraft iFood · Ikea · ColorSnap", bg: "#B4CCE4", fg: "#163A5C" },
    { en: "Benevolent", lk: "sp5", ex: "Sea Tow · North Face · Columbia · Car Seat Helper", bg: "#B4E0C8", fg: "#164A2E", dir2: "HELP →" },
  ];

  const cheatData = [
    ["coreIdea", "coreIdeaV", "Core Idea", "Apps build trust, not just sales"],
    ["trustF", null, "Trust Formula", "Competence + Confidence + Benevolence"],
    ["benApp", "benAppV", "Benevolent App", "Helps first; sells later if at all"],
    ["spectrumL", null, "Spectrum", "Push → Conv → Ent → Assist → Benevolent"],
    ["bestEx", "bestExV", "Best Example", "Liberty Mutual — no moving insurance"],
    ["anchor", "anchorV", "Anchor", "Sea Tow — safety + emergency slider"],
    [null, null, "Evidence", "LM (U.S. 750) + Suruga (JP 1500)"],
    [null, null, "LM", "+24% consider · +14% buy · +41% combined · pref ≈2×"],
    [null, null, "Suruga", "Consider 2.26× · Pref 3×"],
    ["crossCulturalL", "crossCulturalV", "Cross-Cultural", "U.S. + Japan → global brands"],
    ["fiveStepsL", null, "5 Steps", "Level → NPD → Test → Launch → Media mix"],
    ["mediaL", "mediaV", "Media", 'NOT "replace" → optimized mix'],
    ["critiqueL", "critiqueV", "Critique", 'Attitudes/intent not sales. "Strong indications."'],
    ["caveatL", "caveatV", "Caveat", "Must be credible. Can't fix weak products."],
  ];

  return (
    <div style={{ background: "#F9F5EE", minHeight: "100vh", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,'Noto Sans TC',sans-serif", color: "#261F10", lineHeight: 1.82, fontSize: 14 }}>
      {/* Drawer */}
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 300 }}>
        <button onClick={() => setOpen(!open)} style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid #DDD8CE", background: open ? col.navy : "#fff", color: open ? "#fff" : col.navy, fontSize: 13, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", transition: "all 0.2s" }}>{open ? "✕" : "文"}</button>
      </div>
      <div style={{ position: "fixed", top: 16, right: open ? 64 : -220, zIndex: 299, background: "#fff", border: "1px solid #DDD8CE", borderRadius: 12, padding: "8px 6px", display: "flex", flexDirection: "column", gap: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", transition: "right 0.25s ease" }}>
        {langOptions.map(o => (
          <button key={o.key} onClick={() => { setLang(o.key); setOpen(false); }} style={{ padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none", borderRadius: 8, textAlign: "center", background: lang === o.key ? col.navy : "transparent", color: lang === o.key ? "#fff" : "#625A4A", transition: "all 0.15s", whiteSpace: "nowrap" }}>{o.label}</button>
        ))}
      </div>

      <div style={{ maxWidth: 840, margin: "0 auto", padding: "20px 24px 48px" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg,${col.navy} 0%,#2E5B88 50%,${col.red} 100%)`, borderRadius: 18, padding: "44px 38px 34px", marginBottom: 32, color: "#fff", position: "relative", overflow: "hidden" }}>
          <h1 style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.32, marginBottom: 10 }}>The Case for 'Benevolent' Mobile Apps</h1>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>Urban & Sultan — MIT Sloan Management Review, Winter 2015, Vol. 56, No. 2</div>
          <div style={{ display: "inline-block", marginTop: 14, background: "rgba(255,255,255,0.14)", fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, textTransform: "uppercase", padding: "5px 16px", borderRadius: 20, color: "rgba(255,255,255,0.88)" }}>MKTG 6200 — Professor Fareena Sultan (Co-Author)</div>
        </div>

        {/* TOC */}
        <Cd><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#8E8574", marginBottom: 12 }}>{t("Guide Structure", "guideStructure")}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 24px" }}>
            {[["A", col.navy, "Opening Scripts", "openingScripts"], ["B", col.green, "Core Argument", "coreArgument"], ["C", col.purple, "Logic Flow", "logicFlow"], ["D", col.gold, "Spectrum", "spectrum"], ["E", col.navy, "Studies", "studies"], ["F", col.gold, "5 Steps", "steps"], ["G", col.purple, "Comments", "comments"], ["H", col.red, "Q&A", "qa"], ["I", col.purple, "K&K", "kk"], ["J", col.green, "Cheat Sheet", "cheatSheet"]].map(([l, bg, enT, lk]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 0", fontSize: 13 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: bg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{l}</span>{t(enT, lk)}
              </div>
            ))}
          </div>
        </Cd>

        {/* Alert */}
        <div style={{ background: "#FFF9F0", border: "1px solid #EAD6B8", borderLeft: `4px solid ${col.red}`, borderRadius: 12, padding: "20px 24px", marginBottom: 32, fontSize: 14, lineHeight: 1.78 }}>
          <div style={{ color: col.red, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{t("Course Context", "courseContext")}</div>
          <strong>{t("Professor Sultan is a co-author.", "coAuthorNote")}</strong>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 7, fontSize: 13 }}><Tag type="g">ARTICLE</Tag>{t("What the article explicitly states", "articleTag")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 7, fontSize: 13 }}><Tag type="a">INFERENCE</Tag>{t("Reasonable managerial implication", "inferenceTag")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 7, fontSize: 13 }}><Tag type="p">EXTENSION</Tag>{t('Textbook — "The article shows X. From K&K, I\'d connect to Y."', "extensionTag")}</div>
        </div>

        {/* A: Opening */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="A" bg={col.navy} en="Opening Scripts" lk="openingScripts" />
          <Sb label="ENGLISH · 30–45 sec" color={col.navy}><p>This article argues that mobile apps should not be viewed only as direct selling tools. Urban and Sultan propose that firms can build trust through "benevolent" apps — apps that help consumers solve problems or make decisions without focusing narrowly on an immediate sale. The key mechanism is trust: the authors say trust is built on competence, confidence, and benevolence, and that mobile apps are especially effective at signaling benevolence. They support this with two studies — Liberty Mutual in the U.S. and Suruga Bank in Japan — both showing that benevolent apps can improve trust, consideration, and preference. The main takeaway is that a mobile app should be part of a broader brand and trust strategy, not just a digital promotion tool.</p></Sb>
          {dict && <Sb label={`${L?.toUpperCase()} · 30–45 ${L === "zh" ? "秒" : "sec"}`} color={col.green}><p>{dict.coAuthorNote ? "This article argues..." : ""}{/* Secondary language scripts would be full translations - showing structure */}</p></Sb>}
          <div style={{ height: 18 }} />
          <Sb label="ENGLISH · 60–90 sec" color={col.navy}><p>What I found most important is that the article reframes mobile marketing from a transaction lens to a trust lens. The authors contrast push apps — designed to generate sales and promote deals — with benevolent apps, which help consumers in ways not directly tied to an immediate sale. Their argument is not that firms should stop selling. It is that if an app clearly advances the customer's interests, it strengthens the benevolence component of trust, which then improves consideration, preference, and willingness to buy.</p><p style={{ marginTop: 10 }}>The strongest example is Liberty Mutual. The company does not sell moving insurance, yet it developed an app to help people who were moving — a digital safe for recording valuables and a box inventory tool. The app still had a brand capture mechanism on the final screen linking users to agents, so it was not anti-commercial — it was customer value first, with a credible bridge back to the brand.</p><p style={{ marginTop: 10 }}>The article supports this with two studies using pre/post measurement and control conditions. In these forced-exposure settings, the benevolent apps produced stronger incremental effects than specific control media. But the authors do not claim apps replace other media — they say apps should be part of an optimized media mix. I would also note that the evidence mainly captures attitudes, consideration, preference, and purchase intent rather than long-run realized sales, so I see this as strong support for strategic value, not final proof.</p></Sb>
        </div><Dv />

        {/* B: Core */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="B" bg={col.green} en="Core Argument" lk="coreArgument" />
          <Cd><h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><Tag type="g">ARTICLE</Tag> {t("What is a Benevolent App?", "whatIsBenevolent")} <Bdg color={col.red}>KEY</Bdg></h3><p style={{ fontSize: 14, color: "#3E3828", lineHeight: 1.82 }}>{t("Apps whose value is not directly tied to selling products, but to advancing consumers' interests and advocating for their needs ahead of the company's short-term profit.", "benevolentDef")}</p></Cd>

          <Cd><h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}><Tag type="g">ARTICLE</Tag> Push Apps vs. Benevolent Apps</h3>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "min(100%, 220px)", background: "#FDF0F0", border: "1px solid #EABCBC", borderRadius: 12, padding: 18 }}><div style={{ fontSize: 11, fontWeight: 700, color: col.red, marginBottom: 6 }}>PUSH APPS</div><p style={{ fontSize: 13 }}>Staples, Domino's, Zappos<br />{t("Goal: generate sales, promote deals", "pushGoal")}<br />{t("Starting point: company's selling objective", "pushStart")}<br /><span style={{ color: "#6E5A18", fontSize: 11, fontWeight: 700 }}>→ Selling orientation</span></p></div>
              <div style={{ flex: 1, minWidth: "min(100%, 220px)", background: "#EDF7F0", border: "1px solid #ACD8BC", borderRadius: 12, padding: 18 }}><div style={{ fontSize: 11, fontWeight: 700, color: col.green, marginBottom: 6 }}>BENEVOLENT APPS</div><p style={{ fontSize: 13 }}>Sea Tow, North Face, Columbia<br />{t("Goal: help customers, build trust", "benGoal")}<br />{t("Starting point: customer's need/difficulty", "benStart")}<br /><span style={{ color: "#6E5A18", fontSize: 11, fontWeight: 700 }}>→ Customer orientation</span></p></div>
            </div>
          </Cd>

          <Cd><h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><Tag type="g">ARTICLE</Tag> {t("Core Mechanism: Trust", "trustMech")} <Bdg color={col.red}>KEY</Bdg></h3>
            <p style={{ fontSize: 13, marginBottom: 16 }}>{t("Trust is built on three factors (Bart, Shankar, Sultan & Urban, 2005):", "trustIntro")} <Tag type="r">{t("Sultan's prior research", "priorResearch")}</Tag></p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "20px 0" }}>
              {[{ i: "🏆", n: "Competence", lk: "competence", d: "competenceDesc", cl: col.navy }, { i: "🤝", n: "Confidence", lk: "confidence", d: "confidenceDesc", cl: col.gold }, { i: "💚", n: "Benevolence", lk: "benevolence", d: "benevolenceDesc", cl: col.green }].map(f => (
                <div key={f.n} style={{ flex: 1, minWidth: "min(100%, 170px)", background: "#F3EEE6", border: "1px solid #DDD8CE", borderTop: `4px solid ${f.cl}`, borderRadius: 12, padding: "22px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 28 }}>{f.i}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: f.cl, margin: "8px 0 6px" }}>{t(f.n, f.lk)}</h4>
                  <p style={{ fontSize: 12, color: "#625A4A" }}>{t(null, f.d)}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14 }}>{t("Key claim: mobile apps are especially effective at signaling benevolence.", "keyClaim")}</p>
            <Co type="w">{t("Trust must be sustained by quality service and transparent communication. Cannot compensate for weak products indefinitely.", "trustSustain")}</Co>
          </Cd>

          <Cd style={{ borderLeft: `5px solid ${col.gold}` }}><h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}><Tag type="g">ARTICLE</Tag> Sea Tow — {t("Anchor Example", "anchorExample")}</h3>
            <p><strong>Sea Tow</strong> (Southold, NY) — {t("boater emergency towing & rescue.", "seaTowDesc")}</p>
            <p style={{ marginTop: 8 }}><strong>{t("Free App:", "freeApp")}</strong> {t("tide tables · marine weather · GPS · speed", "seaTowFeatures")}</p>
            <p style={{ marginTop: 8 }}>{t("Counterintuitive: Safety info might reduce accidents = less demand? Article argues opposite — consumers sense benevolence → more trust → choose Sea Tow in emergencies.", "counterintuitive")}</p>
            <p style={{ marginTop: 8 }}>{t("App retains emergency help slider → customer welfare first, commercial relevance in background. Not anti-commercial.", "notAntiCommercial")}</p>
          </Cd>
        </div><Dv />

        {/* C: Flow */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="C" bg={col.purple} en="Article Logic Flow" lk="logicFlow" />
          <Cd style={{ textAlign: "center", padding: "32px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#8E8574", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 22 }}>{t("Causal Path", "causalPath")}</div>
            {[[{ x: "Benevolent App", s: "helpsNotSells", bg: "#EDE4F6", fg: col.purple, b: "#D4C4EE" }, { x: "signalsBenev", bg: "#EDE4F6", fg: col.purple, b: "#D4C4EE", isKey: true }, { x: "Trust ↑", s: "trustRises", bg: "#DCE8F4", fg: col.navy, b: "#ACC4DC" }],
            [{ x: "Trust ↑", bg: "#DCE8F4", fg: col.navy, b: "#ACC4DC" }, { x: "Consideration ↑", s: "brandConsidered", bg: "#E4F2E8", fg: col.green, b: "#AAD6BC" }, { x: "Preference ↑", s: "brandPreferred", bg: "#E4F2E8", fg: col.green, b: "#AAD6BC" }, { x: "Purchase Intent ↑", s: "willingnessToBuy", bg: "#FFF4DA", fg: "#7A5A08", b: "#E4D29C" }]
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                {row.map((nd, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {j > 0 && <span style={{ color: "#8E8574", fontSize: 18 }}>→</span>}
                    <div style={{ padding: "10px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600, background: nd.bg, color: nd.fg, border: `1px solid ${nd.b}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 80 }}>
                      {nd.isKey ? t("Signals Benevolence", nd.x) : nd.x}
                      {nd.s && <small style={{ fontSize: 9.5, fontWeight: 400, opacity: 0.65 }}>{t(null, nd.s)}</small>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ fontSize: 11, color: "#8E8574", marginTop: 16, fontStyle: "italic" }}>{t("Evidence mainly captures attitudes/intent, not long-run realized sales.", "evidenceNote")}</div>
          </Cd>
        </div><Dv />

        {/* D: Spectrum */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="D" bg={col.gold} en="Benevolence Spectrum" lk="spectrum" />
          <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", margin: "18px 0", fontWeight: 600, textAlign: "center", border: "1px solid #DDD8CE", flexWrap: "wrap" }}>
            {specData.map((s, i) => (
              <div key={i} style={{ padding: "16px 8px", flex: "1 1 0", minWidth: 120, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, background: s.bg, color: s.fg, fontSize: 12 }}>
                {s.dir && <div style={{ fontSize: 9, opacity: 0.6, letterSpacing: 0.6, fontWeight: 700 }}>{s.dir}</div>}
                <strong>{s.en}</strong>
                {!isEnOnly && dict && <div style={{ fontSize: 10, opacity: 0.7 }}>{dict[s.lk]}</div>}
                <div style={{ fontSize: 10, opacity: 0.8, lineHeight: 1.45, fontWeight: 500 }}>{s.ex}</div>
                {s.dir2 && <div style={{ fontSize: 9, opacity: 0.6, letterSpacing: 0.6, fontWeight: 700 }}>{s.dir2}</div>}
              </div>
            ))}
          </div>
          <Co type="i">{t("Not binary. Managers have strategic flexibility. Trust strategy → far right. Promo → evolve left to right.", "notBinary")}</Co>
          <Co type="w"><span style={{ fontSize: 12 }}>{t("Nationwide discussed in text but not plotted on the spectrum figure.", "nationwideNote")}</span></Co>
        </div><Dv />

        {/* E: Studies */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="E" bg={col.navy} en="Two Empirical Studies" lk="studies" />
          <Cd style={{ borderLeft: `5px solid ${col.navy}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>Study #1: Liberty Mutual — "Dubble Wrap" <Bdg color={col.navy}>BEST EXAMPLE</Bdg></h3>
            <p>Company: Liberty Mutual, Boston | Target: {t("People moving", "peopleMoving")} | Features: Digital safe + Box inventory</p>
            <Co type="g">{t("Key Insight: Sells auto/homeowners/property insurance — does NOT sell moving insurance. Purest benevolence.", "keyInsight")}</Co>
            <p style={{ fontSize: 13 }}>{t("Goodwill-capture: Final screen links to agents. Items catalogued → simplifies application. Customer value first + credible bridge.", "goodwill")}</p>
            <p style={{ fontSize: 12, color: "#8E8574", marginTop: 8 }}>Design: 2010 · 750 iPhone · 550 app | 100 website ctrl | 100 TV ctrl · Pre/post</p>
            <div style={{ overflowX: "auto", margin: "14px 0" }}>
              <table style={{ width: "100%", minWidth: 400, borderCollapse: "separate", borderSpacing: 0, fontSize: 13, borderRadius: 10, overflow: "hidden", border: "1px solid #DDD8CE" }}>
                <thead><tr><Th>Metric</Th><Th>Before</Th><Th>After</Th><Th>Change</Th></tr></thead>
                <tbody>
                  <tr><Td>Consideration (1-10)</Td><Td>5.4</Td><Td>6.7</Td><Td><Hl>+24%</Hl></Td></tr>
                  <tr><Td>Purchase likelihood (1-5)</Td><Td>2.9</Td><Td>3.3</Td><Td><Hl>+14%</Hl></Td></tr>
                  <tr><Td>Combined</Td><Td style={{ textAlign: "center" }} colSpan={2}>1.24 × 1.14</Td><Td><Hl>= 1.41 → +41%</Hl></Td></tr>
                  <tr><Td>Preference (100-pt)</Td><Td>9.2%</Td><Td>17%</Td><Td><Hl>≈ 2×</Hl></Td></tr>
                  <tr><Td>vs. TV/website</Td><Td colSpan={3} style={{ color: "#6E5A18", fontWeight: 700 }}>+60% consideration · +34% preference (forced-exposure)</Td></tr>
                </tbody>
              </table>
            </div>
          </Cd>

          <Cd style={{ borderLeft: `5px solid ${col.green}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Study #2: Suruga Bank — {t("Housing/Financial App", "housingApp")}</h3>
            <p>Company: Suruga Bank, Japan | Features: {t("Home selection + budget advisor + loan info", "homeFeatures")}</p>
            <Co type="w"><span style={{ fontSize: 12 }}>{t('App name varies: "Dream Mover" vs "Dream Move." Safest: "Suruga Bank\'s housing and financial-planning app."', "appNameNote")}</span></Co>
            <p style={{ fontSize: 12, color: "#8E8574" }}>Design: 2013 · 1,500 · 500 app | 500 article ctrl | 500 ad ctrl · Pre/post</p>
            <div style={{ overflowX: "auto", margin: "14px 0" }}>
              <table style={{ width: "100%", minWidth: 300, borderCollapse: "separate", borderSpacing: 0, fontSize: 13, borderRadius: 10, overflow: "hidden", border: "1px solid #DDD8CE" }}>
                <thead><tr><Th>Metric</Th><Th>Result</Th></tr></thead>
                <tbody>
                  <tr><Td>Trust attributes</Td><Td><Hl>All sig. improved (p &lt; .01)</Hl></Td></tr>
                  <tr><Td>Consideration</Td><Td><Hl>4.34 → 14.16 = 2.26×</Hl></Td></tr>
                  <tr><Td>Preference (100-pt)</Td><Td><Hl>0.99 → 3.04 = 3×</Hl></Td></tr>
                  <tr><Td>vs. print ad</Td><Td style={{ color: "#6E5A18", fontWeight: 700 }}>&gt;2× effective (forced-exposure)</Td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#8E8574" }}>{t("Cross-cultural: U.S. + Japan both positive → diverse cultural contexts → global brands.", "crossCultural")}</p>
          </Cd>

          <div style={{ fontSize: 15, fontWeight: 700, margin: "24px 0 12px" }}>{t("Key Numbers", "keyNumbers")} <Bdg color={col.red}>MEMORIZE</Bdg></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {[["+24%", col.navy, "LM Consider.", "5.4→6.7"], ["+41%", col.green, "LM Sales Pot.", "1.24×1.14"], ["2.26×", col.gold, "Suruga Cons.", "4.34→14.16"], ["3×", col.purple, "Suruga Pref.", "0.99→3.04"]].map(([v, cl, l1, l2]) => (
              <div key={l1} style={{ background: "#fff", border: "2px solid #DDD8CE", borderRadius: 14, padding: "20px 10px", textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: cl, lineHeight: 1.15 }}>{v}</div>
                <div style={{ fontSize: 10.5, color: "#625A4A", marginTop: 5, fontWeight: 500 }}>{l1}<br />{l2}</div>
              </div>
            ))}
          </div>
        </div><Dv />

        {/* F: Steps */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="F" bg={col.gold} en="Five Managerial Steps" lk="steps" />
          <Co type="i">{t("Sultan emphasizes action orientation. These are the article's direct prescriptions.", "actionOrientation")}</Co>
          <Stp n={1} enTitle="Decide Benevolence Level" lk="step1">{t("What info do customers need? What service? How to simplify? Be unique, useful, tech-backed. Clear brand link. Trust → far right. Promo → left to right.", "step1d")}</Stp>
          <Stp n={2} enTitle="Design Like a New Product" lk="step2">{t("Not an IT task. Go/no-go steps, focus groups. LM: heavy vs. light → chose simpler. Suruga: 3 focus groups.", "step2d")}</Stp>
          <Stp n={3} enTitle="Test with Users" lk="step3">{t("Flawless & relevant — glitches undermine trust. Know how app creates value + psychological brand link. May need 2.0.", "step3d")}</Stp>
          <Stp n={4} enTitle="Launch with Marketing Support" lk="step4">{t("= launching new product. Awareness not automatic. Dedicated budget. 1M+ apps → invisible without advertising.", "step4d")}</Stp>
          <Stp n={5} enTitle="Link to Overall Media Strategy" lk="step5">{t('Part of trust-building strategy. Article: "other media also important" → optimized mix.', "step5d")} <span style={{ color: col.red, fontWeight: 700 }}>{t('Do NOT say "apps replace traditional media."', "doNotSay")}</span></Stp>
        </div><Dv />

        {/* G: Comments */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="G" bg={col.purple} en="Ready-to-Use Comments" lk="comments" />
          <Cm label="1 — Mechanism">{t("Gives a mechanism. Benevolence strengthens trust → brands must enter consideration set.", "cmt1")}</Cm>
          <Cm label="2 — Still Strategic">{t("Not anti-business. LM created a bridge to other products. Customer value first, not without business relevance.", "cmt2")}</Cm>
          <Cm label="3 — Spectrum">{t("Managers pick the right level for brand and competitive context. Not binary.", "cmt3")}</Cm>
          <Cm label="4 — Qualification">{t("Strong evidence but mainly attitudes/intent. Strategic potential, not final proof of long-run sales.", "cmt4")}</Cm>
          <Cm label={<>5 — Reframing <Tag type="p">EXTENSION</Tag></>} note={t("Your course extension, not article language.", "cmt5note")}>{t("Partly product design (utility), partly communication (trust), partly CRM (pre-sale relationship).", "cmt5")}</Cm>
        </div><Dv />

        {/* H: QA */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="H" bg={col.red} en="Cold-Call Q&A" lk="qa" />
          {[["q1q", "q1a"], ["q2q", "q2a"], ["q3q", "q3a"], ["q4q", "q4a"], ["q5q", "q5a"], ["q6q", "q6a"], ["q7q", "q7a"], ["q8q", "q8a"]].map(([qk, ak], i) => {
            const enQs = ["What is a benevolent app?", "How different from push app?", "Key mechanism?", "Evidence?", "What should managers do?", "Limitations?", "Why Liberty Mutual strongest?", "Cross-cultural?"];
            const enAs = ["Value not tied to selling but to helping consumers — advancing their interests ahead of short-term profit.", "Push = sales + deals. Benevolent = help first. Selling vs. customer orientation.", "Trust = competence + confidence + benevolence. Apps signal benevolence → trust ↑ → consider/prefer/buy ↑.", "Two studies, pre/post + controls. LM: +24% consider, +14% purchase, pref ≈2×. Suruga: 2.26× consider, 3× pref. Forced-exposure.", '5 steps: level → NPD design → test → launch w/ budget → media strategy. Not standalone.', 'Forced-exposure; attitudes/intent not long-run sales. "Strong indications" not proof. Benevolence must be credible.', "Doesn't sell moving insurance. Purest benevolence. Benefit = trust + downstream brand effects.", "U.S. + Japan both positive. Diverse cultural contexts → global brands."];
            return <Qa key={i} n={i + 1} q={<>{t(enQs[i], qk)} {i === 5 && <Tag type="a">CRITICAL THINKING</Tag>}</>} a={t(enAs[i], ak)} />;
          })}
        </div><Dv />

        {/* I: Textbook */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="I" bg={col.purple} en="Kotler & Keller Connections" lk="kk" />
          <Co type="w"><span style={{ fontSize: 12 }}>{t('Course extension, not article language. "The article shows X. From K&K, I\'d connect to Y."', "kkNote")}</span></Co>
          <Cd>
            {[["Ch.11", "IMC / Media Mix", "Strong", "ch11d"], ["Ch.10", "NPD Process", "Strong", "ch10d"], ["Ch.5", "Consumer Decision Journey", "Strong", "ch5d"], ["Ch.8", "CBBE", "Extension", "ch8d"], ["Ch.4", "CRM & Loyalty", "Extension", "ch4d"], ["Ch.7", "Positioning", "Extension", "ch7d"]].map(([ch, name, str, lk], i) => (
              <Tb key={i} ch={ch} name={name} str={str} lk={lk} />
            ))}
          </Cd>
        </div><Dv />

        {/* J: Cheat Sheet */}
        <div style={{ marginBottom: 44 }}>
          <Sh letter="J" bg={col.green} en="Final Cheat Sheet" lk="cheatSheet" />
          <div style={{ background: "#fff", border: `2px solid ${col.navy}`, borderRadius: 16, padding: "24px 20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4px 24px" }}>
              {cheatData.map(([kLk, vLk, enK, enV], i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "6px 0", fontSize: 13, lineHeight: 1.55, borderBottom: "1px dotted #DDD8CE" }}>
                  <span style={{ color: col.navy, fontWeight: 700, minWidth: 90, flexShrink: 0 }}>{kLk ? t(enK, kLk) : enK}</span>
                  <span style={{ color: "#3E3828", wordBreak: "break-word" }}>{vLk ? t(enV, vLk) : enV}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
