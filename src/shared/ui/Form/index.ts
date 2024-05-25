import Input from './Input';
import DatePicker from './DatePicker';
import Select from './Select';
import CheckBox from './CheckBox';
import FileUploader from './FileUploader';
import Radio from './Radio';
import Search from './Search';
import Switch from './Switch';
import Slider from './Slider';
import Editor from './Editor';

interface FormInterface {
  Input: typeof Input;
  DatePicker: typeof DatePicker;
  Select: typeof Select;
  CheckBox: typeof CheckBox;
  FileUploader: typeof FileUploader;
  Radio: typeof Radio;
  Search: typeof Search;
  Switch: typeof Switch;
  Slider: typeof Slider;
  Editor: typeof Editor;
}

const Form = {} as FormInterface;
Form.Input = Input;
Form.DatePicker = DatePicker;
Form.Select = Select;
Form.CheckBox = CheckBox;
Form.FileUploader = FileUploader;
Form.Radio = Radio;
Form.Search = Search;
Form.Switch = Switch;
Form.Slider = Slider;
Form.Editor = Editor;

export default Form;
