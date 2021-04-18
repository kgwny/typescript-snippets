class Example4 {
    public x: number;
    public y: number;

    constructor();
    constructor(arr: number[]);
    constructor(x: number, y: number);
    constructor(x?: any, y?: number) {

        if (x == null) {
            this.x = 0;
            this.y = 0;
        } else {

            if (typeof x === "number") {
                this.x = x;
                this.y = y;
            } else {
                this.x = x[0];
                this.y = x[1];
            }
        }
    }
}
