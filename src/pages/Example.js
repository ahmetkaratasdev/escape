import React, { useEffect, useState } from "react";
import { Button, Collapse, Card, Fade } from 'react-bootstrap';

function Example() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(!open);
    }, [])
  
    return (
      <>
        <div style={{minHeight: '150px'}}>
          <Fade in={open} dimension="width" timeout={1000}>
            <div id="example-collapse-text">
              <Card body >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Fade>
        </div>
      </>
    );
  }

  export default Example;