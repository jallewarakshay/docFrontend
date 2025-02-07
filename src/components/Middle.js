function Middle() {
    return (
        <>
            <hr />
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                What Makes <img src="https://iili.io/2ZfefwP.png" width="120" height="90" alt="Icon" /> Different?
            </h1>
            <br />
            <br />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '30px' }}>
                <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                    <img src="https://iili.io/2QGbqVs.jpg" className="card-img-top" alt="Card 1" />
                    <div className="card-body">
                        <h5><b>Emergency Assistance</b></h5>
                        <p className="card-text">We provide you a emergency contact numbers, emergency consultations and also faster response time in critical situations.</p>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                    <img src="https://iili.io/2QRjqbI.jpg" className="card-img-top" alt="Card 2" />
                    <div className="card-body">
                        <h5><b>Trained Doctors</b></h5>
                        <p className="card-text">Handpicked and extensively trained, our doctors excel in consistently delivering top-quality Telehealth services.</p>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                    <img src="https://iili.io/2QMJLru.jpg" className="card-img-top" alt="Card 3" />
                    <div className="card-body">
                        <h5><b>Cost Effectivness</b></h5>
                        <p className="card-text">Reduces the need for in-person visits, making healthcare more affordable and accessible for users.</p>
                    </div>
                </div>
            </div>

            <hr />
            <br/>

            <h2 className="text-dark d-flex justify-content-flex-start fw-20"><u><ul><ul><ul><ul><b>SERVICES AT ONE GLANCE :</b> </ul></ul></ul></ul></u></h2>
            {/* <h2><u><b><ul><ul><ul><ul><ul><ul><ul><ul><ul> ONE GLANCE</ul></ul></ul></ul></ul></ul></ul></ul></ul></b></u></h2> */}

            {/* <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Services at a Glance</h3> */}
            <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline',color:"black" }}>How Can We </h3>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline',color:"brown" }}><b style={{ color: 'brown' }}>Help You ?</b></h3>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
  <p style={{ textAlign: 'justify', margin: '0', maxWidth: '800px' }}>
    Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.
    
    Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks synthesize integrated schemas with optimal networks.
  </p>
</div>
<br/>
<hr/>


            {/* <hr />

            <img
                src="https://iili.io/2QRejaa.png"
                width="800"  height="400"
                style={{ display: 'block', margin: '0 auto' }}
                alt="Chart Image"
            />

        <hr/> */}

        </>
    );
}

export default Middle;