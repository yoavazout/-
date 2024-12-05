const medications = [
  { symptom: "כאב ראש", product: "אקמול Acamol", link: "https://example.com/product/for-headache" },
  { symptom: "כאבי שרירים", product: "וולטרן אמולג'ל פורטה 2%", link: "https://example.com/product/for-muscle-pain" },
  { symptom: "בחילה", product: "טרבמין Travamin", link: "https://example.com/product/for-nausea" },
  { symptom: "כאב בטן", product: "טאמס Tums", link: "https://example.com/product/for-stomach-pain" },
  { symptom: "שיעול", product: "סירופ Mucosolvan", link: "https://example.com/product/for-cough" },
  { symptom: "חום", product: "אקמול לילדים Acamol", link: "https://example.com/product/for-fever" },
  { symptom: "כאב גרון", product: "סטרפסילס Strepsils", link: "https://example.com/product/for-sore-throat" },
  { symptom: "אלרגיה", product: "טלפסט Telfast", link: "https://example.com/product/for-allergy" },
  { symptom: "כאבי מחזור", product: "אדוויל Advil", link: "https://example.com/product/for-menstrual-pain" },
  { symptom: "כאב גב", product: "מדבקות פלסטר לכאבי גב", link: "https://example.com/product/for-back-pain" },
  { symptom: "כאב שיניים", product: "משחת אלג'ל לשיניים", link: "https://example.com/product/for-toothache" },
  { symptom: "כאב עיניים", product: "טיפות Refresh", link: "https://example.com/product/for-eye-pain" },
  { symptom: "נפיחות", product: "וולטרן ג'ל", link: "https://example.com/product/for-swelling" },
  { symptom: "גזים", product: "טיפות סימיקול", link: "https://example.com/product/for-gas" },
  { symptom: "דלקת גרון", product: "תרסיס Tantum Verde", link: "https://example.com/product/for-throat-infection" },
  { symptom: "התקררות", product: "קולדקס Coldex", link: "https://example.com/product/for-cold" },
  { symptom: "עצירות", product: "נורמלקס", link: "https://example.com/product/for-constipation" },
  { symptom: "שלשול", product: "אימודיום", link: "https://example.com/product/for-diarrhea" },
  { symptom: "צרבת", product: "אומפרדקס Omeprazole", link: "https://example.com/product/for-heartburn" },
  { symptom: "פצע פתוח", product: "בפנטן פלוס", link: "https://example.com/product/for-open-wound" },
  { symptom: "נזלת", product: "סודימול Sudimol", link: "https://example.com/product/for-nasal-congestion" },
  { symptom: "עייפות", product: "מרטונין Melatonin", link: "https://example.com/product/for-fatigue" },
  { symptom: "נדודי שינה", product: "סומנופיד Somnoped", link: "https://example.com/product/for-insomnia" },
  { symptom: "חומציות גבוהה", product: "פמוטידין Famotidine", link: "https://example.com/product/for-high-acidity" },
  { symptom: "כאב אוזניים", product: "טיפות אוזניים Otipax", link: "https://example.com/product/for-ear-pain" },
  { symptom: "כאב גב תחתון", product: "דיפלומט Diplofenac", link: "https://example.com/product/for-lower-back-pain" },
  { symptom: "דלקת מפרקים", product: "אדוויל Advil", link: "https://example.com/product/for-arthritis" },
  { symptom: "תסמינים של סטרס", product: "הומלוגן Homologan", link: "https://example.com/product/for-stress" },
  { symptom: "דלקת עור", product: "קרם הידרוקורטיזון Hydrocortisone", link: "https://example.com/product/for-skin-inflammation" },
  { symptom: "פצעי אקנה", product: "סודיום סולפט Sodium Sulfate", link: "https://example.com/product/for-acne" },
  { symptom: "סחרחורת", product: "דרממין Dramamine", link: "https://example.com/product/for-dizziness" },
  { symptom: "שיפשוף עור", product: "קרם אוואנס Evans Cream", link: "https://example.com/product/for-skin-irritation" },
  { symptom: "גירוי בעור", product: "קרם קלריקו Clarico Cream", link: "https://example.com/product/for-skin-irritation" },
  { symptom: "בדידות", product: "חברים", link: "https://example.com/product/friends" }
];

function toggleSearch() {
  const checkbox = document.getElementById("agreeCheckbox");
  const searchButton = document.getElementById("searchButton");
  const symptomInput = document.getElementById("symptomInput");
  
  if (checkbox.checked) {
    searchButton.disabled = false;
    symptomInput.disabled = false;
  } else {
    searchButton.disabled = true;
    symptomInput.disabled = true;
  }
}

function findProduct() {
  let symptom = document.getElementById("symptomInput").value.toLowerCase();
  let resultDiv = document.getElementById("result");

  // חיפוש דינמי במערך התרופות
  let found = medications.find(item => {
    return symptom.split(' ').some(part => item.symptom.toLowerCase().includes(part));
  });

  if (found) {
    resultDiv.innerHTML = `מוצר מומלץ: <a href="${found.link}" target="_blank">${found.product}</a>`;
  } else {
    resultDiv.innerHTML = "מצטערים, לא נמצאו מוצרים מתאימים. מומלץ להתייעץ עם רופא.";
  }
}
