import { addMinutes, setHours, format, setMinutes, formatDate } from "date-fns";


export function generateDayTimeList(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 9), 0); // define o horario de inicio dos agendamentos
    const endTime = setMinutes(setHours(date, 21), 0); // define o ultimo horario de agedamento
    const interval = 45; // define o intervalo de horarios, a cada 45min
    const timeList: string[] = []; //guarda a lista de tempo/horario

    let currentTime = startTime;

    while (currentTime <= endTime) { //aqui define caso queira acrescentar mais horarios 
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);

    }

    return timeList;



}