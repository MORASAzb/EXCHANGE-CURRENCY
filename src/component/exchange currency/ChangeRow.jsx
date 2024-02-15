import './ChangeRow.css'



import PropTypes from 'prop-types'

const ChangeRow = ({ currencyOption , selectedCurrency, onChangeCurrency, amount,onChangeAmount}) => {
    return (
        <div className='div'>
            <input type="number" value={Number.isNaN(amount) ? '' : amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOption.map((options,index) => (
                    <option key={index} value={options}>{options}</option>
                ))}

            </select>
        </div>
    )
}

ChangeRow.propTypes = {
    currencyOption: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCurrency:PropTypes.string,
    onChangeCurrency:PropTypes.func.isRequired,
    onChangeAmount:PropTypes.func.isRequired,
    amount:PropTypes.number
};



export default ChangeRow