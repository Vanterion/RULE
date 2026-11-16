const rules = [
  {icon:"尊",th:"ให้เกียรติสมาชิกทุกคน",en:"Respect Everyone",thd:"พูดคุยกันด้วยความสุภาพ ไม่ดูหมิ่น เหยียดหยาม คุกคาม หรือสร้างความขัดแย้งกับสมาชิกคนอื่น",end:"Treat everyone with respect. No harassment, discrimination, insults, threats, or targeted hostility."},
  {icon:"≋",th:"ห้ามสแปม",en:"No Spam",thd:"งดส่งข้อความซ้ำ ๆ แท็กคนจำนวนมาก ส่งอีโมจิหรือไฟล์รัว ๆ และรบกวนแชตโดยไม่จำเป็น",end:"Do not flood channels with repeated messages, mass mentions, excessive emojis, or disruptive content."},
  {icon:"↗",th:"ห้ามโฆษณาโดยไม่ได้รับอนุญาต",en:"No Unauthorized Advertising",thd:"ห้ามโปรโมตเซิร์ฟเวอร์ เว็บไซต์ สินค้า หรือบริการของตนเองและผู้อื่นโดยไม่ได้รับอนุญาตจากทีมงาน",end:"Do not promote servers, websites, products, or services without staff permission."},
  {icon:"◈",th:"ใช้เนื้อหาให้เหมาะสม",en:"Keep Content Appropriate",thd:"ห้ามโพสต์เนื้อหาผิดกฎหมาย ลามกอนาจาร รุนแรงเกินควร หรือเนื้อหาที่ไม่เหมาะสมกับชุมชน",end:"Do not post illegal, sexually explicit, excessively violent, or otherwise inappropriate content."},
  {icon:"⌑",th:"เคารพความเป็นส่วนตัว",en:"Protect Privacy",thd:"ห้ามเปิดเผยข้อมูลส่วนตัว รูปภาพ บัญชี หรือข้อความส่วนตัวของผู้อื่นโดยไม่ได้รับความยินยอม",end:"Never share another person's private information, images, accounts, or private messages without consent."},
  {icon:"▦",th:"ใช้ห้องให้ถูกประเภท",en:"Use the Correct Channels",thd:"เลือกห้องให้ตรงกับหัวข้อ อ่านคำอธิบายของแต่ละห้อง และหลีกเลี่ยงการส่งข้อความผิดช่อง",end:"Post in the appropriate channel and follow each channel's topic and instructions."},
  {icon:"⌁",th:"ห้ามการกระทำที่เป็นอันตราย",en:"No Malicious Activities",thd:"ห้ามหลอกลวง ฟิชชิง ส่งมัลแวร์ ปลอมแปลงตัวตน หรือใช้ช่องโหว่เพื่อรบกวนผู้อื่น",end:"No scams, phishing, malware, impersonation, or abuse of vulnerabilities to harm others."},
  {icon:"✳",th:"ปฏิบัติตามคำแนะนำทีมงาน",en:"Follow Staff Instructions",thd:"ให้ความร่วมมือกับผู้ดูแลและทีมงาน หากมีข้อสงสัยให้สอบถามอย่างสุภาพ",end:"Cooperate with moderators and staff. Ask questions politely if anything is unclear."},
  {icon:"↻",th:"ห้ามหลบเลี่ยงบทลงโทษ",en:"No Rule or Punishment Evasion",thd:"ห้ามใช้บัญชีอื่นเพื่อหลบเลี่ยง Timeout, Kick หรือ Ban รวมถึงห้ามกลับมาก่อกวนหลังถูกลงโทษ",end:"Do not use alternate accounts to evade timeouts, kicks, or bans, or return to disrupt the community."},
  {icon:"✓",th:"ปฏิบัติตามข้อกำหนด Discord",en:"Follow Discord's Terms",thd:"สมาชิกทุกคนต้องปฏิบัติตาม Terms of Service และ Community Guidelines ของ Discord ด้วย",end:"All members must also follow Discord's Terms of Service and Community Guidelines."}
];

const translations = {
  th:{community:"COMMUNITY GUIDELINES",eyebrow:"ชุมชนที่ดี เริ่มต้นจากพวกเราทุกคน",titleLine1:"กฎของ",intro:"ยินดีต้อนรับสู่ชุมชนของเรา โปรดอ่านและปฏิบัติตามกฎเหล่านี้ เพื่อให้ทุกคนใช้งานพื้นที่ร่วมกันได้อย่างสบายใจและปลอดภัย",join:"เข้าร่วม Discord",copyAll:"คัดลอกกฎทั้งหมด",rulesCount:"COMMUNITY RULES",updated:"โปรดอ่านก่อนเริ่มพูดคุย",rulesHeading:"กฎการใช้งาน",rulesSub:"เรียบง่าย ชัดเจน และให้เกียรติซึ่งกันและกัน",enforceTitle:"การดูแลและบทลงโทษ",enforceText:"ทีมงานจะพิจารณาตามความรุนแรงและบริบทของเหตุการณ์ การดำเนินการอาจเริ่มตั้งแต่การตักเตือน จำกัดการส่งข้อความ (Timeout) นำออกจากเซิร์ฟเวอร์ หรือแบนถาวร โดยไม่จำเป็นต้องเรียงตามลำดับ",closingTitle:"สร้างชุมชนที่ดี<br>ไปด้วยกัน",closingText:"ขอบคุณที่เป็นส่วนหนึ่งของ VANTERION GROUP",joinNow:"เข้าร่วมชุมชนตอนนี้",footer:"กฎชุมชน · ให้เกียรติและรับผิดชอบต่อส่วนรวม",copied:"คัดลอกกฎแล้ว"},
  en:{community:"COMMUNITY GUIDELINES",eyebrow:"A BETTER COMMUNITY STARTS WITH US",titleLine1:"RULES OF",intro:"Welcome to our community. Please read and follow these guidelines so everyone can enjoy a respectful, safe, and welcoming space.",join:"Join Discord",copyAll:"Copy all rules",rulesCount:"COMMUNITY RULES",updated:"PLEASE READ BEFORE CHATTING",rulesHeading:"Community Guidelines",rulesSub:"Simple, clear, and built on mutual respect.",enforceTitle:"Moderation & Enforcement",enforceText:"Staff will consider the severity and context of each situation. Actions may include a warning, timeout, kick, or permanent ban. These actions do not have to follow a fixed order.",closingTitle:"Build a better<br>community together",closingText:"Thank you for being part of VANTERION GROUP.",joinNow:"Join the community",footer:"Community Rules · Be respectful. Be responsible.",copied:"Rules copied to clipboard"}
};

let language = "th";
const grid = document.getElementById("rulesGrid");
const toast = document.getElementById("toast");

function renderRules(){
  grid.innerHTML = rules.map((rule,index)=>`<article class="rule-card"><div class="rule-top"><span class="rule-number">RULE / ${String(index+1).padStart(2,"0")}</span><span class="rule-symbol" aria-hidden="true">${rule.icon}</span></div><h3>${language==="th"?rule.th:rule.en}</h3><p>${language==="th"?rule.thd:rule.end}</p></article>`).join("");
}
function setLanguage(next){
  language=next;
  document.documentElement.lang=next;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[next][key]) el.innerHTML=translations[next][key];
  });
  document.getElementById("languageToggle").textContent=next==="th"?"EN":"TH";
  renderRules();
}
function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer=window.setTimeout(()=>toast.classList.remove("show"),2200);
}
function getRulesText(){
  return rules.map((rule,index)=>`${index+1}. ${language==="th"?rule.th:rule.en}\n${language==="th"?rule.thd:rule.end}`).join("\n\n");
}
document.getElementById("languageToggle").addEventListener("click",()=>setLanguage(language==="th"?"en":"th"));
document.getElementById("copyAll").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(getRulesText());showToast(translations[language].copied);}
  catch{showToast(language==="th"?"ไม่สามารถคัดลอกได้ กรุณาลองอีกครั้ง":"Unable to copy. Please try again.");}
});
document.getElementById("year").textContent=new Date().getFullYear();
renderRules();