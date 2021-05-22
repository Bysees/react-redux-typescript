import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../store/action-creator';

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}