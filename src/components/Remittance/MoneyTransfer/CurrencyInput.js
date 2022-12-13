import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import Axios from 'axios';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
    color: "black",
  },
  '& .MuiInputBase-input': {
    color: "black",
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 15,
    padding: '10px 14px 10px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.,
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const styles = {
  InputLabelStyle: {
    color: "white",
  },
  InputWidth: {
    width: 180,
  }

}

export default function CurrencyInput() {

  const url = "https://www.hanpass.com/getCost"
  const [data, setData] = useState({
    inputAmount: '',
    inputCurrencyCode: 'KRW',
    toCountryCode: '',
    toCurrencyCode: 'UZS'
  })

  function submit(e) {
    console.log("Submit is pressed");
    console.log(data);
    Axios.post(url, {
      inputAmount: data.inputAmount,
      inputCurrencyCode: data.inputCurrencyCode,
      toCountryCode: data.toCountryCode,
      toCurrencyCode: data.toCurrencyCode,
    })
      .then(res => {
        console.log("Posting data", res.data)
      }).catch(err => console.log(err))
    console.log(data)
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <div>
      <div>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel style={styles.InputLabelStyle} htmlFor="inputAmount">Send</InputLabel>
          <BootstrapInput
            id="inputAmount"
            onChange={(e) => handle(e)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel style={styles.InputLabelStyle} htmlFor="inputCurrencyCode">From</InputLabel>
          <NativeSelect
            id="inputCurrencyCode"
            onChange={(e) => handle(e)}
            input={<BootstrapInput />}
          >
            <option value={"KRW"}> KOR </option>
          </NativeSelect>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel style={styles.InputLabelStyle} htmlFor="demo-customized-textbox">Recieve</InputLabel>
          <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel style={styles.InputLabelStyle} htmlFor="demo-customized-select-native">To</InputLabel>
          <NativeSelect
            id="toCountryCode"
            onChange={(e) => handle(e)}
            input={<BootstrapInput />}
          >
            <option value={""}>NO</option>
            <option value={"UZ"}>UZB</option>
            <option value={"KZ"}>KAZ</option>
            <option value={"KG"}>KYG</option>
          </NativeSelect>
        </FormControl>
      </div>

      <p className="rightside_defination">
        You can <b className="yellowtext">save more</b> than banks
      </p>
      <button type='submit' className="rightside_button"
        onClick={(e) => submit(e)}>
        Submit Now
      </button>
    </div>
  );
}