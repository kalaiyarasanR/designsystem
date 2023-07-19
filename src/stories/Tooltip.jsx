import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from 'prop-types';
//import './page.css';
export const TooltipComponent = ({variant,placement,title, ...props}) => {
  return (
    <OverlayTrigger
    key={placement}
    placement={placement}
    overlay={
      <Tooltip id={`tooltip-${placement}`}>
        {title}
      </Tooltip>
    }
  >
    <Button variant="secondary">Tooltip on {placement}</Button>
  </OverlayTrigger>
  );
};
TooltipComponent.propTypes = {
    variant: PropTypes.oneOf(['primary','danger', 'secondary', 'success','warning','info','light','dark']),
    placement: PropTypes.oneOf(['top','bottom', 'left', 'right']),
    title: PropTypes.string.isRequired,
  };
  
  TooltipComponent.defaultProps = {
    variant: 'primary',
    title: 'sample tooltip',
  };
