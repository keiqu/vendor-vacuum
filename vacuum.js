async function vacuum() {
    let nothingCounter = 0
    let foundTree = false

    while (true) {
        if (nothingCounter >= 5) {
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
            await new Promise(r => setTimeout(r, 1000));

            continue
        }

        nothingCounter = 0
        elems.forEach((e) => {
            console.log("removed vendor entry")
            e.remove()
        })

        console.log("finished vacuuming!")
        await new Promise(r => setTimeout(r, 1000));
    }
}

console.log("started vacuum app!")
vacuum()
