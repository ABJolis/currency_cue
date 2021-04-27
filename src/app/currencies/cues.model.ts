import { Currency } from './currency.model';

export class Cue
{
  constructor(

    public cueId: string,

    public base: Currency,

    public target: Currency,

    public cueRate: string

  ) {}
}
