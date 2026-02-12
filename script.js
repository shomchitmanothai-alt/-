function calculate() {
    // รับค่าจาก input
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let z1 = Number(document.getElementById("z1").value);

    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let z2 = Number(document.getElementById("z2").value);

    let x3 = Number(document.getElementById("x3").value);
    let y3 = Number(document.getElementById("y3").value);
    let z3 = Number(document.getElementById("z3").value);

    let x4 = Number(document.getElementById("x4").value);
    let y4 = Number(document.getElementById("y4").value);
    let z4 = Number(document.getElementById("z4").value);
// ตรวจสอบทรงกลมหนึ่งหน่วย
function onUnitSphere(x, y, z) {
    return Math.abs(x*x + y*y + z*z - 1) < 0.0001;
}
if (
    !(onUnitSphere(x1,y1,z1) &&
    onUnitSphere(x2,y2,z2) &&
    onUnitSphere(x3,y3,z3) &&
    onUnitSphere(x4,y4,z4)) 
) {
    document.getElementById("result").innerText = "❌ มีจุดที่ไม่อยู่บนทรงกลมหนึ่งหน่วย";
    return;
}
// คำนวณ determinant
let a = x2 - x1;
let b = y2 - y1;
let c = z2 - z1;

let d = x3 - x1;
let e = y3 - y1;
let f = z3 - z1;

let g = x4 - x1;
let h = y4 - y1;
let i = z4 - z1;

let det = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);

let volume = Math.abs(det)/6;

document.getElementById("result").innerText = 
  "✅ ปริมาตรพีระมิด = " + volume.toFixed(3) + "ลูกบาศ์กหน่วย";
} 
