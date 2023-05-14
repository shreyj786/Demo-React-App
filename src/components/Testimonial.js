import {memo} from 'react';

function Testimonial() {
    const list = [
        {
            name: "John Doe",
            img: require("../Assets/test_1.jfif")
        },
        {
            name: "Emma Brown",
            img: require("../Assets/test_3.jfif")
        },
        {
            name: "Monty Smith",
            img: require("../Assets/test_2.jfif")
        }
    ]
    return (
        <section>
            <div className="contianer-fluid py-5 border border-top border-bottom">
                <div className="row justify-content-center gap-4 mx-0">
                    <div className="col-10">
                        <h4>Testimonials</h4>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-9 carousel slide shadow-lg" id="testimonial" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {list.map((item, index) => (
                                index === 0 ? (
                                    <button type="button" data-bs-slide-to="0" data-bs-target="#testimonial" className="active"></button>) :
                                    (
                                        <button type="button" data-bs-slide-to={index} data-bs-target="#testimonial"></button>
                                    )
                            ))}
                        </div>
                        <div className="carousel-inner mb-3">
                            {list.map((item,index) => (
                                index === 0 ? (<div key={item.name} className="carousel-item text-center active">
                                    <img className="mb-3" src={item.img} alt="test" />
                                    <h5 className="mx-auto">{item.name}</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae commodi eius in repellat cumque, earum nesciunt dolorum quia blanditiis neque qui quaerat reprehenderit placeat esse quibusdam deleniti incidunt exercitationem enim sapiente possimus! Delectus ipsa fuga, quo possimus quasi asperiores at praesentium incidunt, magni, repellat quibusdam!</p>
                                </div>) : (<div key={item.name} className="carousel-item text-center">
                                    <img className="mb-3" src={item.img} alt="test" />
                                    <h5 className="mx-auto">{item.name}</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae commodi eius in repellat cumque, earum nesciunt dolorum quia blanditiis neque qui quaerat reprehenderit placeat esse quibusdam deleniti incidunt exercitationem enim sapiente possimus! Delectus ipsa fuga, quo possimus quasi asperiores at praesentium incidunt, magni, repellat quibusdam!</p>
                                </div>)
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Testimonial);