export class Quote {
  public showDetails: boolean;
  constructor(public id: number, public quote: string, public author: string, public personPosted: string,  public datePosted: Date) {
    this.showDetails =  false;
  }

}
