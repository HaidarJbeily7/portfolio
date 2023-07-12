import type {ListProps} from "$lib/interfaces";

export const prerender = true;


export async function load({params}): Promise<{ [key: number]: ListProps }> {
    return {
        0: {
            title: 'Work Experience',
            listItems: [
                'maids.cc -- Software Developer, full-time-remote July 2022 - April 2023',
                'iHomes-- Full-Stack Developer, full-time-remote, January 2022 - June 2022',
                'SellAnyAd-- Full Stack Developer, full-time, July 2021 - January 2022',
                'ZeroOnePlus-- Flutter Developer, part-time, June 2021 - December 2021',
                'FutureLaby-- Full Stack Developer, full-time, July 2020 - June 2021',
            ]
        },
        1: {
            title: 'Skills',
            listItems: [
                'PHP/Laravel/Node.js: 4 years of experience.',
                'Python/Django/Flask: 2 years of experience',
                'Java/Spring boot: 2 years of experience',
                'React.js: 2 years of experience.',
                'Flutter: 3 years of experience',
            ]
        },
    };
}