//part 2
function logfunc() {
    console.log(document.querySelector("div"))
}

//part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]


function avggradestud(new_list) {
    const studentsScholarship = []
    for (const st of new_list) {
        st.grades = st.grades.reduce((a,b) => a+b,0) / st.grades.length; {
            if(st.grades >= 80){
                st.gradesavg = st.grades;
                studentsScholarship.push(st)
             }
        }
    }
return studentsScholarship
}

console.log(avggradestud(students))

//part 4
function dark_mode(){
    const dark_toggle = document.querySelector(".light-theme")
    return dark_toggle.classList.toggle("dark-theme")
}
dark_mode()