// const arrow = function (param) {}

// const arrow = (param) => {}  // const arrow = param => {}

// const arrow = param => console.log(param)

// const arrow = param => ({paarm: param})

// const arrow = (param1, param2) => {}

// // {id: 1, movie: xxx}

// const arrow = ({id, movie}) => {
//     console.log(id, movie)
// }


const luke = {
    id: 2,
    say: function () {
        setTimeout(function () {
            console.log('id: ', this.id)
        }, 50)
    },
    sayWithThis: function () {
        let that = this
        setTimeout(function () {
            console.log('this id: ', that.id)
        }, 500)
    },
    sayWithArrow: function () {
        setTimeout(() => {
            console.log('arrow id: ', this.id)
        })
    },
    sayWithGlobalArrow: () => {
        setTimeout(() => {
            console.log('global arrow id: ', this.id)
        }, 2000)
    }
}

luke.say()
luke.sayWithThis()
luke.sayWithArrow()
luke.sayWithGlobalArrow()