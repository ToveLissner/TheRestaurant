import { daysOfWeek } from "../consts/dates";
import { CalendarDiv } from "./styled/CalendarDiv";
import { CalendarGrid } from "./styled/CalendarGrid";
import { CalendarHeader } from "./styled/CalendarHeader";
import { CalendarMonth } from "./styled/CalendarMonth";
import { H3 } from "./styled/H3";
import { LeftButton } from "./styled/LeftButton";
import { RightButton } from "./styled/RightButton";
import { Cell } from "./styled/Cell";
import { differenceInDays, endOfMonth, startOfMonth } from "date-fns";

interface ICalendarProps {
    value: Date;
    onChange: (value: Date) => void;
}

export const Calendar = (props: ICalendarProps) => {
    const startDate = startOfMonth(props.value);
    const endDate = endOfMonth(props.value);
    const numberofDays = differenceInDays(endDate, startDate) +1;

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    console.log(suffixDays);

    let daysOfWeekHtml = daysOfWeek.map( (day) => {

        return(
            <Cell key={day}>{day}</Cell>
    )}); 

    let arrayOfDays = Array.from( {length: numberofDays});
    let daysOfMonthHTML = arrayOfDays.map( (day, index) => {
        const dateCounts = index + 1;
        return (
            <Cell key={dateCounts}>{dateCounts}</Cell>
        )});

    let arrayOfPrefixDays = Array.from( {length: prefixDays -1});
    let prefixDaysOfMonth = arrayOfPrefixDays.map( (day, index) => {

        return (
            <Cell key={index}></Cell>
        )});

    let arrayOfSuffixDays = Array.from( {length: suffixDays +1});
    let suffixDaysOfMonth = arrayOfSuffixDays.map( (day, index) => {

        return (
            <Cell key={index}></Cell>
        )});
    
    return (
        <CalendarDiv>
            <H3>Calendar</H3>
            <CalendarHeader>
                <LeftButton>left</LeftButton>
                <CalendarMonth>Augusti</CalendarMonth>
                <RightButton>right</RightButton>
            </CalendarHeader>
            <CalendarGrid>
                {/* {daysOfWeek.map( (day) => (
                    <Cell key={day}>{day}</Cell>
                ) )} */}
                {daysOfWeekHtml}
                {prefixDaysOfMonth}
                {daysOfMonthHTML}
                {suffixDaysOfMonth}
                {/* {Array.from({length: numberofDays}).map( () => ())} */}
            </CalendarGrid>

        </CalendarDiv>
    );
}