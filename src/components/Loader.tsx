import { Stack } from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'

type Props = {}

const Loader = (props: Props) => {
  return (
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width={"100%"} border={'1px'} borderColor={"red"}>
        <InfinitySpin width="200"color="#4fa94d" />
    </Stack>
  )
}

export default Loader