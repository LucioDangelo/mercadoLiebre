const productosMercadoLiebre = [
    {
        id:1,
        titulo: 'Alien: El juego oficial',
        descripcionCorta: 'Juego de mesa de Alien',
        descripcionDetallada: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rem possimus aut natus, vitae at quia quaerat nam quo error, atque aliquid, velit molestias. Officia harum voluptates quam quis doloremque!',
        precio: '$5.550',
        img: 'juegoAlien.jpg'
    },
    {
        id:2,
        titulo: 'The Walking Dead',
        descripcionCorta: 'Juego de mesa de The Walking Dead',
        descripcionDetallada: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rem possimus aut natus, vitae at quia quaerat nam quo error, atque aliquid, velit molestias. Officia harum voluptates quam quis doloremque!',
        precio: '$7.500',
        img: 'juegoTheWalkingDead.jpg'
    },
    {
        id:3,
        titulo: 'Monopoly: Game of Thrones',
        descripcionCorta: 'Juego de mesa de Monopoly Game of Thrones',
        descripcionDetallada: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rem possimus aut natus, vitae at quia quaerat nam quo error, atque aliquid, velit molestias. Officia harum voluptates quam quis doloremque!',
        precio: '$8.999',
        img: 'juegoMonoGOT.jpg'
    },
    {
        id:4,
        titulo: 'Game of Thrones',
        descripcionCorta: 'Juego de mesa de Game of Thrones',
        descripcionDetallada: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rem possimus aut natus, vitae at quia quaerat nam quo error, atque aliquid, velit molestias. Officia harum voluptates quam quis doloremque!',
        precio: '$8.999',
        img: 'juegoGOT.jpg'
    }
]

const mainController = {
    index: (req, res) => {
        res.render('index', { productos: productosMercadoLiebre})
    },
};

module.exports = mainController;