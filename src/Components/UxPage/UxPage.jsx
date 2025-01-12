import './UxPage.css';

const UxPage = () => {
  return (
    <>
      <div className='ux-page'>
        <div className='content ux-content-1'>
          <h1>UX Research Projects (DEMO)</h1>
          <p>
            This page is for YouTube content demo purpose only. Some details
            have been modified to protect confidentiality. Hiring Managers:
            please contact aona.ux@gmail.com for my latest UXR work.{' '}
          </p>
        </div>
      </div>
      <div className='ux-page ux-page-alternate'>
        <div className='content ux-content-2'>
          <h2>Metrics Discovery Concept Testing</h2>
          <div>
            <p>
              <strong>Year:</strong> 2018
            </p>
            <p>
              <strong>Role:</strong> Lead UX Researcher
            </p>
            <p>
              <strong>Research Method:</strong> Contextual Inquiry + Focus Group
            </p>
            <p>
              <strong>Research Type:</strong> Exploratory UXR
            </p>
            <p>
              <strong>Company:</strong> Sumo Logic
            </p>
          </div>
        </div>
        <div>
          <img src='src/Assets/ux1.jpg' alt='ux1' />
        </div>
      </div>
      <div className='ux-page'>
        <div className='content ux-content-2'>
          <h2>Adopting HEART Metrics Framework</h2>
          <div>
            <p>
              <strong>Year:</strong> 2018
            </p>
            <p>
              <strong>Role:</strong> Lead UX Researcher
            </p>
            <p>
              <strong>Research Method:</strong> Cross-functional team workshop
            </p>
            <p>
              <strong>Research Type:</strong> Exploratory UXR
            </p>
            <p>
              <strong>Company:</strong> Sumo Logic
            </p>
          </div>
        </div>
        <div>
          <img src='src/Assets/ux2.jpg' alt='ux1' />
        </div>
      </div>
      <div className='ux-page ux-page-alternate'>
        <div className='content ux-content-2'>
          <h2>Feature Y Usability Rapid Research</h2>
          <div>
            <p>
              <strong>Year:</strong> 2019
            </p>
            <p>
              <strong>Role:</strong> Lead UX Researcher
            </p>
            <p>
              <strong>Research Method:</strong> 3 rounds of lab Usability
              Testing
            </p>
            <p>
              <strong>Research Type:</strong> Iterative UXR
            </p>
            <p>
              <strong>Company:</strong> Airbnb
            </p>
          </div>
        </div>
        <div>
          <img src='src/Assets/ux3.jpg' alt='ux1' />
        </div>
      </div>
    </>
  );
};

export default UxPage;
