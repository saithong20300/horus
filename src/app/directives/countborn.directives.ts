
export class CountBorn {
    
    transformBorn(date: string): string {
        let returnDate: string;
        let birth = new Date(date); //วันเกิด
        let dateNow = new Date();//วันปัจจุบัน
        let years, days, months = 0

        if (birth < dateNow) {
            months = ((dateNow.getFullYear() * 12) + (dateNow.getMonth() + 1)) - ((birth.getFullYear() * 12) + (birth.getMonth() + 1));

            if (0 > (days = dateNow.getDate() - birth.getDate())) {
                var yearNow = dateNow.getFullYear(), monthNow = dateNow.getMonth(), monthNow = (--monthNow < 0) ? 11 : monthNow;
                days += [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthNow]
                    + (((1 == monthNow) && ((yearNow % 4) == 0) && (((yearNow % 100) > 0) || ((yearNow % 400) == 0)))
                        ? 1 : 0);
                --months;
            }

            years = (months - (months % 12)) / 12;
            months = (months % 12);
            returnDate = years + " ปี " + months + " เดือน " + days +" วัน "

        } else {
            returnDate = "1"
        }
        return returnDate
    }
}