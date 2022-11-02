const soldier = {
    nameSoldier: '_Mr_4aO_',
    health: 10,
    weapon: {
        nameWeapon: 'M4A1',
        numberOfCartridges: 30,
    },
    supplies: 3,
    getStatus() {
        console.log(`Имя солдата: (${this.nameSoldier}) Здоровье (${this.health}) Название оружия: (${this.weapon.nameWeapon})
     Количество патронов: (${this.weapon.numberOfCartridges}) Припасы: (${this.supplies}) `)
    },
    fire() {
        this.weapon.numberOfCartridges--
        let shooting = this.weapon.numberOfCartridges <= 0 ? 'обойма пуста.Перезарядитесь' : `${this.weapon.numberOfCartridges}`;
        console.log(`количество патронов: бах-бах (${shooting})  Припасы: ${this.supplies}`)
    },


    reload() {
        this.weapon.numberOfCartridges = + 30,
            this.supplies--
        let weaponsSupplies = this.supplies <= 0 ? 'Не осталось припасов' : `(${this.supplies})`
        console.log(`Перезарядка... ${this.weapon.numberOfCartridges} Припасы: ${weaponsSupplies}`)
    },
    hurt() {
        this.health--
        let amountOfHealth = this.health <= 0 ? 'GAME OWER' : `(${this.health})`
        console.log(`Здоровье: ${amountOfHealth}`)
    }
}


soldier.fire()

soldier.hurt()

soldier.hurt()
soldier.getStatus()