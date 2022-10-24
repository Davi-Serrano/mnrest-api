import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import { IDateProvider } from "./IDateProiver";

dayjs.extend(utc)

class DayJsProvider implements IDateProvider {
    addDays(days: number): Date {
        return dayjs().add(days, "days").toDate();
    }
};

export { DayJsProvider };