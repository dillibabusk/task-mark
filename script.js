const form = document.createElement("form")
form.setAttribute("id","form")
form.addEventListener("submit",(event)=>{
event.defaultPrevented();
let students = [];
let  student = {};

const studName= document.getElementById("name").value;
const studDept= document.getElementById("dept").value;
const marks=readMarkData();
const total=getTotal(marks);
const average=getAverage(total,marks.length);
const grade=getGrade(average);

students.push({
    Name: studname,
    department: studDept,marks,total,average,grade
});
console.log(students);
 document.getElementById("name").value="";
 document.getElementById("dept").value="";

}) ;



const inputName= document.createElement("input");
inputName.setAttribute("id","name");
//inputName.setAttribute("required",true);
form.appendChild(inputName);

const inputDept= document.createElement("input");
inputDept.setAttribute("id","dept");
//inputDept.setAttribute("required",);
form.appendChild(inputDept);


let btn= document.createElement("button");
btn.setAttribute("id","submit");
btn.textContent="submit";
btn.setAttribute("type","submit");
form.appendChild(btn);
document.body.appendChild(form);

function readMarkData() {
    const marks = prompt("Enter marks like ex: 1,2,3,4,5");
    if (marks == null || marks == "") {
        alert("Mark is mandatory");
        return;

    }
    return marks.split(",");
}

const getTotal=(marks)=>marks.reduce((a,b)=>Number(a)+Number(b));
const getAverage=(total,length)=>total/length;
const getGrade=(avg)=>{switch(avg)
{
    case avg>80:
        return "A";
        case avg>60:
            return "B"
    break;
    default:
        return "D"
        break;

}
}


