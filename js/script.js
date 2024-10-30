window.onload = () => {
    const form = document.getElementById('empForm')
    form.onsubmit = (e) => {
        e.preventDefault()
        const id = document.getElementById('id').value
        const name = document.getElementById('name').value
        const ext = document.getElementById('ext').value
        const email = document.getElementById('email').value
        const department = document.getElementById('department').value
console.log(`Id: ${id} \nName: ${name} \nExtension: ${ext} \nEmail: ${email} \nDepartment: ${department}`)
    }
}