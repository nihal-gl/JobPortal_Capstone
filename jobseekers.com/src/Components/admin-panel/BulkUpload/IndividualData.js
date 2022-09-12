import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.company}</th>
            <th>{individualExcelData.ctc}</th>
            <th>{individualExcelData.exp}</th>
            <th>{individualExcelData.location}</th>
            <th>{individualExcelData.title}</th>
        
        </>
    )
}