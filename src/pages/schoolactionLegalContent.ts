export type LegalLocale = "en" | "zh" | "es";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  label: string;
  title: string;
  summary: string;
  updated: string;
  notice: string;
  sections: LegalSection[];
}

export const supportEmail = "mls@mylogicstudio.com";

export function legalLocale(value?: string): LegalLocale {
  return value === "zh" || value === "es" ? value : "en";
}

export const privacyDocuments: Record<LegalLocale, LegalDocument> = {
  en: {
    label: "PRIVACY",
    title: "SchoolAction Privacy Policy",
    summary: "How MyLogix Studio LLC handles school notices, device data, purchases, and product analytics.",
    updated: "Last updated: November 2, 2026",
    notice: "SchoolAction is built for parents, guardians, caregivers, and other adults—not for children to use on their own. Please avoid uploading information that is not needed to understand a notice.",
    sections: [
      { heading: "1. Operator and scope", paragraphs: [
        "SchoolAction is operated by MyLogix Studio LLC (\"MyLogix,\" \"we,\" \"us,\" or \"our\"), a Massachusetts limited liability company. This Policy applies to the SchoolAction iOS app, website, and related services (the \"Service\"). Questions and privacy requests may be sent to " + supportEmail + "."
      ]},
      { heading: "2. Information we process", bullets: [
        "Notice content you choose to submit, including pasted text, screenshots, photos, PDFs, and other supported files. A notice may contain names, school information, dates, contact details, or student-related information.",
        "Generated action plans, translations, source quotations, reply drafts, calendar details, and completion choices. In the iOS app, action-plan history is stored locally on your device.",
        "A randomly generated installation identifier. We hash it before storing it on our server and use it to manage free uses, credits, subscriptions, and basic product events.",
        "Limited usage and diagnostic information, such as target language, source type, document category, action count, response time, model version, an input-size fingerprint, feature events, and optional feedback. We do not place the original notice or generated plan in our analytics database.",
        "App Store purchase information, including product and transaction identifiers, purchase and expiration dates, quantity, environment, and entitlement status. Apple handles your payment credentials; we do not receive your full card number.",
        "Device permissions and locally created data when you choose to use the camera or photo library, add an event to Calendar, or schedule a notification."
      ]},
      { heading: "3. How we use information", bullets: [
        "Create the action plan, translation, reply draft, and calendar suggestions you request.",
        "Provide local history and reminders, verify purchases, restore access, apply usage limits, and prevent duplicate or fraudulent transactions.",
        "Operate, secure, troubleshoot, measure, and improve the Service using minimized product and performance data.",
        "Comply with law, enforce our Terms, and protect users, MyLogix, and the public."
      ]},
      { heading: "4. AI processing and providers", paragraphs: [
        "Notice content is transmitted over the internet to our service and to OpenAI so an AI model can produce the requested result. Our current OpenAI Responses API requests use store=false. OpenAI states that API data is not used to train its models unless the customer opts in; standard abuse-monitoring logs may nevertheless be retained for up to 30 days, subject to OpenAI's controls and exceptions.",
        "We also use Vercel for hosting and request processing, Supabase for server-side analytics and entitlement records, Apple for app distribution, purchases and device permissions, and infrastructure providers used by those companies. These providers process information for us under their applicable terms and safeguards."
      ]},
      { heading: "5. What we do not do", bullets: [
        "We do not sell personal information.",
        "We do not use school notices for targeted advertising or cross-company behavioral tracking.",
        "We do not use submitted notices or generated plans to train a MyLogix model.",
        "The current version does not ask for a school password or connect to a school account."
      ]},
      { heading: "6. Retention and deletion", paragraphs: [
        "SchoolAction does not persist the original notice or generated plan in its application database after the analysis request finishes. Infrastructure and AI providers may keep limited logs for their documented security periods. Action-plan history remains on your device until you remove the app or its data. Calendar events and notifications remain in the relevant Apple service until you remove them.",
        "Minimized analysis and funnel records are normally retained for up to 24 months and may then be deleted or aggregated. Installation entitlement records are kept while needed to deliver purchased access. Minimal transaction records may be retained longer when reasonably necessary for accounting, fraud prevention, refunds, disputes, or legal obligations.",
        "You may request access, correction, or deletion of server-linked information by emailing " + supportEmail + ". Because SchoolAction currently has no account, we may need information that reasonably verifies the relevant installation or transaction. Deleting the app removes local SchoolAction history but not Apple purchase records or calendar data."
      ]},
      { heading: "7. Children and student information", paragraphs: [
        "The Service is intended for adults and is not directed to children under 13. Children should not submit notices or personal information directly. A parent or authorized adult who submits a notice is responsible for having authority to do so and for removing unnecessary information. Do not submit Social Security numbers, financial credentials, passwords, or full medical or special-education records.",
        "If you believe a child submitted personal information directly to us, contact " + supportEmail + " so we can investigate and delete it as appropriate."
      ]},
      { heading: "8. Security, location, and choices", paragraphs: [
        "We use reasonable safeguards, including encrypted transport, server-only credentials, hashed installation identifiers, and restricted database access. No system is completely secure. Our providers primarily process information in the United States.",
        "Depending on applicable law, you may have rights to access, correct, delete, or obtain information about our use of personal information, and to appeal a denied request. We do not discriminate for exercising applicable rights. You may also decline optional feedback, Calendar, notification, camera, and photo permissions."
      ]},
      { heading: "9. Changes and contact", paragraphs: [
        "We may update this Policy as the product or law changes. We will revise the date above and provide additional notice when required. Contact MyLogix Studio LLC at " + supportEmail + "."
      ]}
    ]
  },
  zh: {
    label: "隐私",
    title: "SchoolAction 隐私政策",
    summary: "说明 MyLogix Studio LLC 如何处理学校通知、设备数据、购买记录和产品分析数据。",
    updated: "最后更新：2026年11月2日",
    notice: "SchoolAction 面向家长、监护人、照护者及其他成年人，并非供儿童独立使用。请不要上传理解通知所不需要的信息。",
    sections: [
      { heading: "1. 运营主体与适用范围", paragraphs: [
        "SchoolAction 由马萨诸塞州有限责任公司 MyLogix Studio LLC（简称“MyLogix”或“我们”）运营。本政策适用于 SchoolAction iOS App、网站及相关服务（统称“服务”）。隐私问题或请求可发送至 " + supportEmail + "。"
      ]},
      { heading: "2. 我们处理的信息", bullets: [
        "您主动提交的通知内容，包括粘贴文字、截图、照片、PDF及其他支持的文件。通知可能包含姓名、学校信息、日期、联系方式或学生相关信息。",
        "生成的行动卡、翻译、原文引用、英文回复草稿、日历信息以及完成状态。在 iOS App 中，行动卡历史仅保存在您的设备上。",
        "随机生成的安装标识。服务器保存前会将其哈希处理，用于管理免费次数、点数、订阅状态和基础产品事件。",
        "有限的使用和诊断信息，例如目标语言、来源类型、文件类别、行动项数量、响应时间、模型版本、输入规模指纹、功能事件以及可选反馈。分析数据库不保存原始通知或生成的行动卡。",
        "App Store 购买信息，包括产品和交易编号、购买和到期时间、数量、环境和权益状态。付款资料由 Apple 处理，我们不会收到完整银行卡号。",
        "当您主动使用相机或照片、添加日历事件或设置通知时产生的设备权限和本地数据。"
      ]},
      { heading: "3. 信息用途", bullets: [
        "读取通知，并生成您请求的行动卡、翻译、回复草稿和日历建议。",
        "提供本地历史和提醒，验证购买、恢复权益、执行使用限制，以及防止重复或欺诈交易。",
        "利用最小化的产品和性能数据运营、保护、排障、衡量和改进服务。",
        "遵守法律、执行服务条款，并保护用户、MyLogix及公众。"
      ]},
      { heading: "4. AI处理与服务提供商", paragraphs: [
        "通知内容会通过互联网发送至我们的服务及 OpenAI，由 AI 模型生成您请求的结果。当前 OpenAI Responses API 请求设置为 store=false。OpenAI 表示，除非客户主动选择加入，否则 API 数据不会用于训练模型；但按照其标准政策，滥用监控日志仍可能最多保留30天，并受其控制措施和例外情况约束。",
        "我们还使用 Vercel 托管和处理请求、Supabase 保存服务端分析和权益记录、Apple 提供应用分发、购买及设备权限，以及这些公司的基础设施服务商。供应商依据适用条款和安全措施代表我们处理信息。"
      ]},
      { heading: "5. 我们不会做的事情", bullets: [
        "不出售个人信息。",
        "不把学校通知用于定向广告或跨公司行为追踪。",
        "不使用您提交的通知或生成结果训练 MyLogix 自有模型。",
        "当前版本不会索取学校门户密码，也不会连接学校账户。"
      ]},
      { heading: "6. 保留与删除", paragraphs: [
        "分析请求完成后，SchoolAction 不会在应用数据库中持续保存原始通知或生成的行动卡。基础设施和 AI 供应商可能按照其公开的安全期限保留有限日志。行动卡历史保存在设备上，直到您删除 App 或其数据；日历事件和通知会保留在相应 Apple 服务中，直到您自行删除。",
        "最小化的分析和漏斗记录通常最多保留24个月，之后删除或聚合。安装权益记录会在提供已购买权益所需期间保留。为会计、防欺诈、退款、争议处理或法律义务所合理必要的最小交易记录可能保留更长时间。",
        "您可以发送邮件至 " + supportEmail + " 请求访问、更正或删除与服务器关联的信息。由于当前不设账户，我们可能需要合理核实对应安装或交易。删除 App 会移除本地 SchoolAction 历史，但不会删除 Apple 购买记录或已写入日历的数据。"
      ]},
      { heading: "7. 儿童与学生信息", paragraphs: [
        "本服务面向成年人，不针对13岁以下儿童。儿童不应直接提交通知或个人信息。家长或获授权成年人应确保有权提交，并移除本次分析不需要的信息。请勿提交社会安全号码、银行账户凭据、密码，或完整医疗/特殊教育档案。",
        "如果您认为儿童直接提交了个人信息，请联系 " + supportEmail + "，我们会调查并酌情删除。"
      ]},
      { heading: "8. 安全、处理地点与选择", paragraphs: [
        "我们采用合理的安全措施，包括传输加密、仅限服务器使用的密钥、哈希安装标识及受限数据库访问。但任何系统都无法保证绝对安全。我们的供应商主要在美国处理信息。",
        "根据适用法律，您可能有权访问、更正或删除个人信息，了解我们如何使用信息，并对被拒绝的请求提出申诉。我们不会因您行使适用权利而歧视您。您也可以拒绝可选反馈、日历、通知、相机和照片权限。"
      ]},
      { heading: "9. 政策更新与联系方式", paragraphs: [
        "我们可能因产品或法律变化更新本政策，并会更新上方日期；法律要求时会另行通知。请通过 " + supportEmail + " 联系 MyLogix Studio LLC。"
      ]}
    ]
  },
  es: {
    label: "PRIVACIDAD",
    title: "Política de Privacidad de SchoolAction",
    summary: "Cómo MyLogix Studio LLC trata los avisos escolares, los datos del dispositivo, las compras y las métricas del producto.",
    updated: "Última actualización: 2 de noviembre de 2026",
    notice: "SchoolAction está diseñado para padres, tutores, cuidadores y otros adultos, no para que los niños lo usen por su cuenta. Evite subir información innecesaria para entender un aviso.",
    sections: [
      { heading: "1. Operador y alcance", paragraphs: [
        "SchoolAction es operado por MyLogix Studio LLC (“MyLogix”, “nosotros”), una sociedad de responsabilidad limitada de Massachusetts. Esta Política se aplica a la app iOS, el sitio web y los servicios relacionados (el “Servicio”). Envíe preguntas y solicitudes de privacidad a " + supportEmail + "."
      ]},
      { heading: "2. Información que tratamos", bullets: [
        "El contenido que usted decide enviar: texto pegado, capturas, fotos, PDF y otros archivos admitidos. Un aviso puede contener nombres, datos escolares, fechas, contactos o información relacionada con un estudiante.",
        "Planes de acción, traducciones, citas, borradores de respuesta, datos de calendario y estados de finalización. En iOS, el historial se guarda localmente en su dispositivo.",
        "Un identificador de instalación aleatorio. Lo convertimos en un hash antes de guardarlo y lo usamos para administrar usos gratuitos, créditos, suscripciones y eventos básicos.",
        "Datos limitados de uso y diagnóstico: idioma, tipo de fuente y documento, número de acciones, tiempo de respuesta, versión del modelo, huella del tamaño de entrada, eventos y comentarios opcionales. La base analítica no guarda el aviso original ni el plan generado.",
        "Información de compras del App Store: producto, identificadores de transacción, fechas, cantidad, entorno y estado del acceso. Apple procesa los pagos; no recibimos el número completo de su tarjeta.",
        "Permisos y datos locales cuando decide usar la cámara o las fotos, agregar un evento al Calendario o programar una notificación."
      ]},
      { heading: "3. Cómo usamos la información", bullets: [
        "Crear el plan, la traducción, la respuesta y las sugerencias de calendario solicitadas.",
        "Ofrecer historial local y recordatorios, verificar compras, restaurar acceso, aplicar límites y evitar transacciones duplicadas o fraudulentas.",
        "Operar, proteger, diagnosticar, medir y mejorar el Servicio con datos minimizados.",
        "Cumplir la ley, aplicar los Términos y proteger a usuarios, MyLogix y el público."
      ]},
      { heading: "4. IA y proveedores", paragraphs: [
        "El aviso se transmite por internet a nuestro servicio y a OpenAI para producir el resultado. Las solicitudes actuales a Responses API usan store=false. OpenAI indica que no usa los datos de API para entrenar sus modelos salvo que el cliente opte por ello; aun así, los registros estándar contra abuso pueden conservarse hasta 30 días, sujetos a sus controles y excepciones.",
        "También usamos Vercel para alojamiento y procesamiento, Supabase para métricas y derechos de acceso del servidor, Apple para distribución, compras y permisos, y proveedores de infraestructura de esas empresas."
      ]},
      { heading: "5. Lo que no hacemos", bullets: [
        "No vendemos información personal.",
        "No usamos avisos para publicidad dirigida ni seguimiento conductual entre empresas.",
        "No usamos avisos ni planes para entrenar un modelo propio de MyLogix.",
        "La versión actual no solicita contraseñas ni se conecta a portales escolares."
      ]},
      { heading: "6. Conservación y eliminación", paragraphs: [
        "Al terminar la solicitud, SchoolAction no conserva el aviso original ni el plan generado en su base de datos. Los proveedores pueden conservar registros limitados durante sus periodos de seguridad. El historial permanece en el dispositivo hasta que elimine la app o sus datos. Los eventos y avisos permanecen en los servicios de Apple hasta que usted los quite.",
        "Los registros minimizados normalmente se conservan hasta 24 meses y luego se eliminan o agregan. Los registros de acceso se conservan mientras sean necesarios para ofrecer compras. Registros mínimos de transacción pueden conservarse más tiempo por contabilidad, fraude, reembolsos, disputas u obligaciones legales.",
        "Puede solicitar acceso, corrección o eliminación escribiendo a " + supportEmail + ". Como no hay cuentas, quizá debamos verificar razonablemente la instalación o transacción. Eliminar la app borra el historial local, pero no los registros de Apple ni los datos del calendario."
      ]},
      { heading: "7. Niños e información estudiantil", paragraphs: [
        "El Servicio está destinado a adultos y no se dirige a menores de 13 años. Los niños no deben enviar avisos ni datos directamente. El adulto debe tener autoridad y retirar datos innecesarios. No envíe números de Seguro Social, credenciales financieras, contraseñas ni expedientes médicos o de educación especial completos.",
        "Si cree que un niño nos envió datos directamente, escriba a " + supportEmail + " para que podamos investigar y eliminarlos cuando corresponda."
      ]},
      { heading: "8. Seguridad, ubicación y opciones", paragraphs: [
        "Aplicamos salvaguardas razonables, como transporte cifrado, credenciales solo del servidor, identificadores hash y acceso restringido. Ningún sistema es totalmente seguro. Nuestros proveedores procesan principalmente en Estados Unidos.",
        "Según la ley aplicable, puede tener derechos de acceso, corrección, eliminación, información y apelación. No discriminamos por ejercer derechos aplicables. También puede rechazar comentarios, Calendario, notificaciones, cámara y fotos."
      ]},
      { heading: "9. Cambios y contacto", paragraphs: [
        "Podemos actualizar esta Política cuando cambien el producto o la ley. Actualizaremos la fecha y daremos avisos adicionales cuando corresponda. Contacte a MyLogix Studio LLC en " + supportEmail + "."
      ]}
    ]
  }
};

export const termsDocuments: Record<LegalLocale, LegalDocument> = {
  en: {
    label: "TERMS",
    title: "SchoolAction Terms of Service",
    summary: "The rules for using SchoolAction and important limits of its AI-assisted school-notice tools.",
    updated: "Effective: November 2, 2026",
    notice: "SchoolAction organizes information; it does not replace the original notice or the school. Always verify dates, amounts, requirements, and recipients before acting.",
    sections: [
      { heading: "1. Agreement and eligibility", paragraphs: [
        "These Terms are an agreement between you and MyLogix Studio LLC (\"MyLogix,\" \"we,\" \"us,\" or \"our\") governing SchoolAction. By using the Service, you accept these Terms and acknowledge the Privacy Policy. If you do not agree, do not use it. You must be at least 18 and legally able to enter this agreement, or use the Service under the supervision of a parent or legal guardian. The Service is designed for adult caregivers, not for children to use independently."
      ]},
      { heading: "2. What the Service does", paragraphs: [
        "SchoolAction uses automated systems, including AI, to turn a notice you provide into an action plan, translation, source excerpts, reply draft, calendar suggestion, and related tools. Features and supported formats may change. We grant you a limited, personal, nonexclusive, nontransferable, revocable license to use the Service for lawful household purposes, subject to these Terms."
      ]},
      { heading: "3. Important limits—verify the original", bullets: [
        "AI output may be incomplete, mistranslated, outdated, or wrong. The original notice and the school are the authoritative sources.",
        "Before signing, paying, attending, replying, missing a deadline, or making any decision, verify every date, amount, requirement, contact, link, and instruction against the original notice or with the school.",
        "SchoolAction is not a school, district, government agency, lawyer, doctor, therapist, or special-education advocate. It does not provide legal, medical, educational, financial, or emergency advice and cannot determine rights under an IEP, 504 plan, FERPA, immigration law, or other law.",
        "Do not use SchoolAction for emergencies. Contact the school or appropriate emergency service directly.",
        "MyLogix is not affiliated with, sponsored by, or endorsed by any school, district, OpenAI, Apple, Vercel, or Supabase merely because their services or names appear in the product."
      ]},
      { heading: "4. Your content and responsibilities", paragraphs: [
        "You keep ownership of content you submit. You give MyLogix a limited, worldwide license to host, transmit, reproduce, and process it only as needed to operate, secure, and support the Service. You represent that you have the right and authority to submit it, including any student-related information. You are responsible for reviewing output before using or sharing it.",
        "Do not submit unnecessary sensitive information, credentials, malware, unlawful content, or content that violates another person's privacy or intellectual-property rights. Do not use the Service to monitor a child unlawfully, impersonate another person, mislead a school, or make automated high-impact decisions about a student."
      ]},
      { heading: "5. Acceptable use", bullets: [
        "Do not reverse engineer, disrupt, overload, probe, or bypass the Service, usage limits, security controls, or purchase verification.",
        "Do not resell access, use automated scraping or bulk submission, or use output to build a competing model or service without written permission.",
        "Do not use the Service or output for unlawful, harmful, fraudulent, abusive, or rights-infringing purposes.",
        "We may apply reasonable technical limits to protect users, quality, security, and operating costs."
      ]},
      { heading: "6. Free uses, credits, and subscriptions", paragraphs: [
        "We may offer limited free analyses. Consumable analysis credits are charged only after a completed analysis and do not expire, except where Apple issues a refund, reverses a transaction, or law requires otherwise. The annual Family Plan provides the features displayed at purchase, subject to reasonable safeguards against automated, abusive, or commercial bulk use.",
        "iOS purchases are processed by Apple and are also governed by Apple's terms. Prices and localized billing details appear before purchase. An auto-renewable annual subscription is charged to your Apple ID and renews unless canceled at least 24 hours before the end of the current period. Manage or cancel it in your Apple account. Restore Purchases is available for restorable purchases. Refund requests are handled under Apple's policies. We may change future prices or offerings with required notice; changes do not retroactively remove paid, unexpired credits."
      ]},
      { heading: "7. Ownership and feedback", paragraphs: [
        "The Service, branding, software, design, and our materials are owned by MyLogix or its licensors. Subject to these Terms, you may use, copy, and share the action plan and reply draft generated for your personal use. Source content remains subject to its original ownership. If you provide feedback, you allow us to use it without obligation or compensation, but we will not treat your notice itself as general feedback."
      ]},
      { heading: "8. Availability and suspension", paragraphs: [
        "The Service may be unavailable, delayed, or changed and is not guaranteed to preserve data. Keep the original notice and important output. We may suspend or terminate access for material breach, fraud, security risk, unlawful conduct, or to comply with law. You may stop using the Service at any time."
      ]},
      { heading: "9. Disclaimers", paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE AND OUTPUT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” MYLOGIX DISCLAIMS IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND UNINTERRUPTED AVAILABILITY. WE DO NOT WARRANT THAT OUTPUT IS CORRECT OR WILL PRODUCE A PARTICULAR SCHOOL, LEGAL, OR EDUCATIONAL OUTCOME. Some jurisdictions do not allow certain disclaimers."
      ]},
      { heading: "10. Limitation of liability", paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYLOGIX AND ITS MEMBERS, EMPLOYEES, CONTRACTORS, AND LICENSORS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR LOST DATA, OPPORTUNITIES, OR PROFITS. OUR TOTAL LIABILITY WILL NOT EXCEED THE GREATER OF US$100 OR THE AMOUNT YOU PAID FOR SCHOOLACTION DURING THE 12 MONTHS BEFORE THE EVENT. These limits do not apply where prohibited by law."
      ]},
      { heading: "11. Governing law and contact", paragraphs: [
        "Please contact " + supportEmail + " first so we can try to resolve a concern informally. Except where consumer law requires otherwise, these Terms are governed by Massachusetts law, and claims may be brought in the state or federal courts in Worcester County, Massachusetts. Nothing limits non-waivable consumer rights or an eligible small-claims action.",
        "If a provision is unenforceable, the remainder stays effective. We may update these Terms prospectively and will provide notice when required. Contact MyLogix Studio LLC at " + supportEmail + "."
      ]}
    ]
  },
  zh: {
    label: "服务条款",
    title: "SchoolAction 服务条款",
    summary: "SchoolAction 的使用规则，以及 AI 学校通知工具的重要限制。",
    updated: "生效日期：2026年11月2日",
    notice: "SchoolAction 只帮助整理信息，不能取代原始通知或学校。采取行动前，请务必核对日期、金额、要求和收件人。",
    sections: [
      { heading: "1. 接受条款与使用资格", paragraphs: [
        "本条款是您与 MyLogix Studio LLC（简称“MyLogix”或“我们”）之间关于 SchoolAction 的协议。使用服务即表示您接受本条款并确认已阅读隐私政策；如不同意，请勿使用。您必须年满18岁并具有签约能力，或在家长/法定监护人监督下使用。本服务面向成年照护者，不供儿童独立使用。"
      ]},
      { heading: "2. 服务内容", paragraphs: [
        "SchoolAction 使用包括 AI 在内的自动化系统，把您提供的通知整理为行动卡、翻译、原文依据、回复草稿、日历建议和相关工具。功能和支持格式可能变化。我们授予您有限、个人、非独占、不可转让且可撤销的许可，仅限依本条款用于合法家庭用途。"
      ]},
      { heading: "3. 重要限制——必须核对原文", bullets: [
        "AI 结果可能不完整、翻译错误、过时或不准确。原始通知和学校才是权威来源。",
        "签字、付款、参加活动、回复、错过期限或作出决定前，请根据原通知或向学校核对所有日期、金额、要求、联系人、链接和指示。",
        "SchoolAction 不是学校、学区、政府机构、律师、医生、治疗师或特殊教育倡导者，不提供法律、医疗、教育、财务或紧急建议，也不能判断 IEP、504计划、FERPA、移民法或其他法律下的权利。",
        "紧急情况请勿使用 SchoolAction，应直接联系学校或相应紧急服务。",
        "MyLogix 不因产品中出现相关服务或名称而与任何学校、学区、OpenAI、Apple、Vercel 或 Supabase 构成附属、赞助或背书关系。"
      ]},
      { heading: "4. 您的内容与责任", paragraphs: [
        "您保留所提交内容的所有权，并授予 MyLogix 一项有限、全球性许可，仅为运营、保护和支持服务之目的托管、传输、复制和处理该内容。您确认自己有权提交相关内容，包括学生相关信息。使用或分享结果前，您有责任进行核对。",
        "请勿提交不必要的敏感信息、账号凭据、恶意软件、违法内容或侵犯他人隐私/知识产权的内容；不得利用服务非法监控儿童、冒充他人、误导学校，或对学生作出自动化高影响决策。"
      ]},
      { heading: "5. 可接受使用", bullets: [
        "不得逆向工程、干扰、超载、探测或绕过服务、使用限制、安全控制或购买验证。",
        "未经书面许可，不得转售访问权、自动抓取或批量提交，也不得利用结果训练竞争模型或服务。",
        "不得将服务或结果用于违法、有害、欺诈、滥用或侵权目的。",
        "为保护用户、质量、安全和运营成本，我们可设置合理技术限制。"
      ]},
      { heading: "6. 免费次数、点数与订阅", paragraphs: [
        "我们可能提供有限免费分析。分析点数仅在分析成功完成后扣除，且不会过期；Apple 退款、交易撤销或法律另有要求的除外。年度家庭方案提供购买页面展示的功能，但受到防止自动化、滥用或商业批量使用的合理限制。",
        "iOS 购买由 Apple 处理，并同时受 Apple 条款约束。购买前会显示价格和账单信息。自动续订年度订阅将从 Apple ID 扣款，除非在当前周期结束至少24小时前取消，否则会续订。您可在 Apple 账户中管理或取消。可恢复项目提供“恢复购买”。退款由 Apple 政策处理。未来价格或方案可能依法调整，但不会追溯取消已付费且未使用的有效点数。"
      ]},
      { heading: "7. 所有权与反馈", paragraphs: [
        "服务、品牌、软件、设计和我们的资料归 MyLogix 或许可方所有。在遵守条款的前提下，您可将为个人用途生成的行动卡和回复草稿用于、复制和分享。原始内容仍受原有权利限制。您提交反馈即允许我们无偿使用，但学校通知本身不被视为一般反馈。"
      ]},
      { heading: "8. 可用性与暂停", paragraphs: [
        "服务可能中断、延迟或变更，也不保证永久保存数据。请保留原始通知和重要结果。若发生重大违约、欺诈、安全风险、违法行为或法律要求，我们可暂停或终止访问。您可随时停止使用。"
      ]},
      { heading: "9. 免责声明", paragraphs: [
        "在法律允许的最大范围内，服务和结果按“现状”和“可提供状态”提供。MyLogix 不作适销性、特定用途适用性、所有权、不侵权、准确性或不间断可用性的默示保证，也不保证结果正确或能取得特定学校、法律或教育结果。部分司法辖区不允许某些免责。"
      ]},
      { heading: "10. 责任限制", paragraphs: [
        "在法律允许的最大范围内，MyLogix 及其成员、员工、承包商和许可方不对间接、附带、特殊、后果性、惩罚性损失或数据、机会、利润损失负责。我们对全部索赔的总责任不超过100美元或导致索赔事件前12个月内您为 SchoolAction 支付的金额（以较高者为准）。法律禁止限制的责任不受此限。"
      ]},
      { heading: "11. 适用法律与联系", paragraphs: [
        "请先联系 " + supportEmail + "，以便尝试友好解决。除消费者法律另有强制规定外，本条款适用马萨诸塞州法律，诉讼可向马萨诸塞州伍斯特县的州或联邦法院提出。本条款不限制不可放弃的消费者权利或符合条件的小额索赔。",
        "若某条不可执行，其余条款仍有效。我们可面向未来更新条款，并在法律要求时通知。联系 MyLogix Studio LLC：" + supportEmail + "。"
      ]}
    ]
  },
  es: {
    label: "TÉRMINOS",
    title: "Términos de Servicio de SchoolAction",
    summary: "Las reglas de uso y los límites importantes de las herramientas de IA para avisos escolares.",
    updated: "Vigentes desde: 2 de noviembre de 2026",
    notice: "SchoolAction organiza información; no sustituye el aviso original ni a la escuela. Verifique fechas, importes, requisitos y destinatarios antes de actuar.",
    sections: [
      { heading: "1. Acuerdo y requisitos", paragraphs: [
        "Estos Términos son un acuerdo entre usted y MyLogix Studio LLC (“MyLogix”, “nosotros”) sobre SchoolAction. Al usar el Servicio, acepta estos Términos y reconoce la Política de Privacidad. Si no acepta, no lo use. Debe tener al menos 18 años y capacidad para contratar, o usarlo bajo supervisión de un padre o tutor. El Servicio está diseñado para cuidadores adultos, no para uso independiente por niños."
      ]},
      { heading: "2. Qué hace el Servicio", paragraphs: [
        "SchoolAction usa sistemas automatizados, incluida IA, para convertir un aviso en un plan, traducción, citas, borrador de respuesta, sugerencias de calendario y herramientas relacionadas. Las funciones y formatos pueden cambiar. Le otorgamos una licencia limitada, personal, no exclusiva, intransferible y revocable para fines domésticos lícitos."
      ]},
      { heading: "3. Límites importantes: verifique el original", bullets: [
        "La IA puede producir resultados incompletos, mal traducidos, desactualizados o incorrectos. El aviso original y la escuela son las fuentes autorizadas.",
        "Antes de firmar, pagar, asistir, responder, perder un plazo o decidir, verifique fechas, importes, requisitos, contactos, enlaces e instrucciones con el aviso o la escuela.",
        "SchoolAction no es una escuela, distrito, agencia pública, abogado, médico, terapeuta ni defensor de educación especial. No ofrece asesoría legal, médica, educativa, financiera ni de emergencia, ni determina derechos bajo un IEP, Plan 504, FERPA, inmigración u otra ley.",
        "No use SchoolAction para emergencias. Contacte directamente a la escuela o al servicio correspondiente.",
        "MyLogix no está afiliado, patrocinado ni respaldado por escuelas, distritos, OpenAI, Apple, Vercel o Supabase por el solo hecho de usar o mencionar sus servicios."
      ]},
      { heading: "4. Su contenido y responsabilidades", paragraphs: [
        "Usted conserva la propiedad de lo que envía y concede a MyLogix una licencia limitada y mundial para alojar, transmitir, reproducir y tratarlo solo para operar, proteger y apoyar el Servicio. Declara tener derecho y autoridad para enviarlo, incluidos datos estudiantiles. Debe revisar el resultado antes de usarlo o compartirlo.",
        "No envíe datos sensibles innecesarios, credenciales, malware, contenido ilegal o que viole privacidad o propiedad intelectual. No use el Servicio para vigilar ilegalmente a un menor, suplantar, engañar a una escuela ni tomar decisiones automatizadas de alto impacto sobre un estudiante."
      ]},
      { heading: "5. Uso aceptable", bullets: [
        "No realice ingeniería inversa, interfiera, sobrecargue, pruebe ni eluda límites, seguridad o verificación de compras.",
        "No revenda acceso, automatice envíos masivos ni use resultados para crear un modelo o servicio competidor sin permiso escrito.",
        "No use el Servicio o sus resultados con fines ilegales, dañinos, fraudulentos, abusivos o infractores.",
        "Podemos aplicar límites técnicos razonables para proteger usuarios, calidad, seguridad y costos."
      ]},
      { heading: "6. Usos gratuitos, créditos y suscripciones", paragraphs: [
        "Podemos ofrecer análisis gratuitos limitados. Los créditos se descuentan solo al completar un análisis y no vencen, salvo reembolso o reversión de Apple o exigencia legal. El Plan Familiar anual incluye las funciones mostradas al comprar, sujeto a medidas razonables contra uso automatizado, abusivo o comercial masivo.",
        "Apple procesa las compras iOS y también se aplican sus términos. El precio aparece antes de comprar. La suscripción anual se cobra a su Apple ID y se renueva salvo cancelación al menos 24 horas antes de terminar el periodo. Puede administrarla o cancelarla en Apple. Restaurar Compras está disponible para compras restaurables. Apple tramita reembolsos. Podemos cambiar precios futuros con el aviso requerido, sin quitar créditos pagados vigentes."
      ]},
      { heading: "7. Propiedad y comentarios", paragraphs: [
        "El Servicio, marca, software, diseño y materiales pertenecen a MyLogix o sus licenciantes. Conforme a estos Términos, puede usar, copiar y compartir para uso personal el plan y borrador generados. El contenido fuente conserva sus restricciones. Si da comentarios, nos permite usarlos sin obligación ni compensación; el aviso escolar no se considera comentario general."
      ]},
      { heading: "8. Disponibilidad y suspensión", paragraphs: [
        "El Servicio puede no estar disponible, demorarse o cambiar, y no garantiza conservar datos. Guarde el aviso y resultados importantes. Podemos suspender o terminar acceso por incumplimiento sustancial, fraude, riesgo de seguridad, conducta ilegal o exigencia legal. Puede dejar de usarlo cuando quiera."
      ]},
      { heading: "9. Exclusión de garantías", paragraphs: [
        "EN LA MÁXIMA MEDIDA PERMITIDA, EL SERVICIO Y LOS RESULTADOS SE OFRECEN “TAL CUAL” Y “SEGÚN DISPONIBILIDAD”. MYLOGIX EXCLUYE GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD, TITULARIDAD, NO INFRACCIÓN, EXACTITUD Y DISPONIBILIDAD. NO GARANTIZAMOS RESULTADOS CORRECTOS NI UN RESULTADO ESCOLAR, LEGAL O EDUCATIVO. Algunas jurisdicciones no permiten ciertas exclusiones."
      ]},
      { heading: "10. Limitación de responsabilidad", paragraphs: [
        "EN LA MÁXIMA MEDIDA PERMITIDA, MYLOGIX Y SUS MIEMBROS, EMPLEADOS, CONTRATISTAS Y LICENCIANTES NO RESPONDEN POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES, EJEMPLARES O PUNITIVOS, NI POR PÉRDIDA DE DATOS, OPORTUNIDADES O BENEFICIOS. LA RESPONSABILIDAD TOTAL NO EXCEDERÁ EL MAYOR ENTRE US$100 Y LO PAGADO EN LOS 12 MESES ANTERIORES. No se aplican límites prohibidos por ley."
      ]},
      { heading: "11. Ley aplicable y contacto", paragraphs: [
        "Escriba primero a " + supportEmail + " para intentar resolver el problema. Salvo que una ley de consumo exija otra cosa, rige la ley de Massachusetts y las reclamaciones pueden presentarse en tribunales estatales o federales del condado de Worcester. No se limitan derechos irrenunciables ni reclamaciones elegibles de menor cuantía.",
        "Si una disposición no puede aplicarse, las demás siguen vigentes. Podemos actualizar estos Términos prospectivamente y avisaremos cuando corresponda. Contacto: MyLogix Studio LLC, " + supportEmail + "."
      ]}
    ]
  }
};
