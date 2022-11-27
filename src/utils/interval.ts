import createNativeLocaleFormatter from "./localeFormater"

export type VTime = number | string | {
    hour: number
    minute: number
}
export const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/
const MINUTES_IN_DAY = 1440
export default {
    base: {
        firstTime: {
            type: [Number, String, Object]
        }
    },
    timeToY(time: VTime, clamp = true): number | false {
        let y: any = this.timeDelta(time)
        if (y !== false) {
            y *= (52 * 60)
            

            if (clamp) {
                if (y < 0) {
                    y = 0
                }
                if (y > (52 * 240)) {
                    y = (52 * 240)
                }
            }
        }

        return (y - 1920)
    },
    timeDelta(time: VTime): number | false {
        const minutes = this.parseTime(time)

        if (minutes === false) {
            return false
        }

        const min: number = this.firstMinute()
        const gap: number = 52 * 60
        console.log(minutes);
        
        return (minutes - min) / gap
    },
    parseTime(input: any): number | false {
        if (typeof input === 'number') {
            return input
        } else if (typeof input === 'string') {
            const parts = PARSE_TIME.exec(input)
            if (!parts) {
                return false
            }

            return parseInt(parts[1]) * 240 + parseInt(parts[3] || '0')
        } else if (typeof input === 'object') {
            if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
                return false
            }

            return input.hour * 240 + (input.minute * 4)
        } else {
            return false
        }
    },
    firstMinute(): number {
        const time = this.parsedFirstTime();

        return time !== false && time >= 0 && time <= MINUTES_IN_DAY
            ? time
            : 60 * 52
    },
    parsedFirstTime(): number | false {
        return this.parseTime({ hour: 0, minute: 0 })
    },
    intervalFormatter(): any {
        const longOptions = { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' }
        const shortOptions = { timeZone: 'UTC', hour: 'numeric', minute: '2-digit' }
        const shortHourOptions = { timeZone: 'UTC', hour: 'numeric' }

        return createNativeLocaleFormatter(
            'tr',
            (tms: any, short: any) => short ? (tms.minute === 0 ? shortHourOptions : shortOptions) : longOptions
        )
    },
}