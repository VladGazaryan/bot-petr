import { Context, Telegraf } from 'telegraf';

export default class CommandController {
  public async init(bot: Telegraf): Promise<void> {
    bot.command('commands', async (context: Context) => {
      await this.execute(context);
    });
  }

  public async execute(context: Context) {
    const COMMANDS =
      '👤 <b>регистрация</b> - зарегистрироваться для участия в событиях \n\n' +
      '💬 <b>инфа</b> - узнать правдивость высказывания \n' +
      '<i>Пример: Софа инфа я лох</i> \n\n' +
      '🤔 <b>выбери</b> - выбрать что-то из списка. Множественный выбор \n' +
      '<i>Пример: Софа выбери латте или капучино</i> \n\n' +
      '🏳‍🌈 <b>найди пидора</b> - найти гея в беседе \n' +
      '<i>Поиск только по тем, кто зарегистрировался. Выбор доступен один раз в день. </i> \n\n' +
      '❓ <b>кто</b> - выбор случайного участника для твоего утверждения \n' +
      '<i>Пример: Софа кто хороший разработчик</i> \n\n\n' +
      'Все команды должны начинаться с "Софа"';
    await context.reply(COMMANDS, {
      parse_mode: 'HTML',
    });
  }
}
