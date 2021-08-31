let nothingCounter = 0
let foundTree = false

function vacuum() {
    if (nothingCounter >= 10) {
        console.log("exiting")
        return
    }

    console.log("vacuuming...")

    if (!foundTree) {
        vendorFolder = document.querySelector("[data-qa-file-name='vendor']")
        if (vendorFolder != null) {
            vendorFolder.parentNode.parentNode.remove()
            console.log("removed tree entry!")
            foundTree = true
        }
    }

    let elems = document.querySelectorAll("[data-path^='vendor']")
    if (elems.length == 0) {
        console.log("vendor not found! sleeping...")

        nothingCounter++
        setTimeout(vacuum, 1000)

        return
    }

    nothingCounter = 0
    elems.forEach((e) => {
        e.remove()
    })
    console.log("removed " + elems.length + " vendor entries.")

    console.log("finished vacuuming!")
    setTimeout(vacuum, 1000)
}

console.log("started vacuum app!")
vacuum()
