export class Beer {
  empty: boolean = false;
  pintsLeft: number = 124;
  constructor(public name: string, public brewery: string, public location: string, public ibu: number, public alcoholContent: number, public halfPintPrice: number, public pintPrice: number, public description: string) { }
}
