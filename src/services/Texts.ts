import { KeyboardButton } from "node-telegram-bot-api"

export const START_TEXT = `Добро пожаловать!\nМеня зовут Daily Bot, я помогу вам проще и быстрее находить информацию, ` + 
`ради которой не хочется заходить в браузер\n` +
`Теперь все в вашем любимом мессенджере😊`
export const START_PANEL_TEXT = "⚙️Выберете нужный функционал⚙️"
export const START_PANEL: KeyboardButton[][] = [
    [{text:"Chat GPT"}, {text:""}],
    [{text:"Прогноз погоды"}, {text:"Курс валюты"}],
    [{text:"Помощь"}, {text:""}]
]
export const BACK_PANEL: KeyboardButton[][] = [
    [{text:"◀️ На главную"}, {text:""}],
]