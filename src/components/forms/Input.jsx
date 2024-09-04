/**
 *
 * @param {String} type
 * @param {string}value
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */

// eslint-disable-next-line react/prop-types
export default function Input({type, value, onChange}) {

    return <>
        <input
            type={type}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className={"w-10/12"}
        />
    </>
}