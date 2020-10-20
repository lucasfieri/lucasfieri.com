import Theme from '../../styles/Theme';
import GlobalStyle from '../../styles/Global';

const Container = ({ children }) => (
  <Theme>
    <GlobalStyle />
    {children}
  </Theme>
)
export default Container
