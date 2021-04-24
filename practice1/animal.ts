class Animal {
    // メンバ変数
    animaltype: string;
    voice: string;

    // コストラクタはなくても良い
    constructor(animalType: string, voice: string) {
        this.animaltype = animalType;
        this.voice = voice;
    }

    say() {
        console.log(`${this.animaltype}「${this.voice}」`);
    }
}

const smallAnimal = new Animal("犬", "ワンワン");
smallAnimal.say();
