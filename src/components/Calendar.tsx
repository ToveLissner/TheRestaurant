import { daysOfWeek } from "../consts/dates";
import { CalendarDiv } from "./styled/CalendarDiv";
import { CalendarGrid } from "./styled/CalendarGrid";
import { CalendarHeader } from "./styled/CalendarHeader";
import { CalendarMonth } from "./styled/CalendarMonth";
import { H3 } from "./styled/H3";
import { LeftButton } from "./styled/LeftButton";
import { RightButton } from "./styled/RightButton";
import { Cell, DateCell } from "./styled/Cell";
import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from "date-fns";
import { CalendarSelected } from "./styled/CalendarSelected";
import { CalendarGridSuffix } from "./styled/CalendarGridSuffix";
import { CalendarWeekdays } from "./styled/CalendarWeekdays";

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

    const changeToPrevMonth = () => {
        props.onChange(sub(props.value, {months: 1}));
    }

    const changeToNextMonth = () => {
        props.onChange(add(props.value, {months: 1}));
    }

    const handleClickDate = (index: number) => {
        const date = setDate(props.value, index);
        props.onChange(date);
    }

    let daysOfWeekHtml = daysOfWeek.map( (day) => {

        return(
            <Cell key={day}>{day}</Cell>
    )}); 

    let arrayOfDays = Array.from( {length: numberofDays});
    let daysOfMonthHTML = arrayOfDays.map( (day, index) => {
        const dateCounts = index + 1;
        const isCurrentDate = dateCounts === props.value.getDate();

        return (
            <DateCell onClick={() => handleClickDate(dateCounts)} key={dateCounts}>{dateCounts}</DateCell>
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
                <LeftButton onClick={changeToPrevMonth}>left</LeftButton>
                <CalendarMonth>{format(props.value, "LLLL yyyy")}</CalendarMonth>
                <RightButton onClick={changeToNextMonth}>right</RightButton>
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
            <CalendarSelected>
                <H3>Valt datum: {format(props.value, "dd LLLL yyyy")}</H3>
            </CalendarSelected>
        </CalendarDiv>
    );
}