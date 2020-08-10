import React, { Fragment } from 'react'

const Footer1 = () => {
    return (
        <Fragment>
            <footer >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7">
                            <div class="footer-site-logo"><a href="#">Unfold<span>.</span></a>
                            </div>
                            <ul class="footer-site-social">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Dribbble</a></li>
                                <li><a href="#">Behance</a></li>
                            </ul>
                            <p class="site-copyright">
                                Copyright &copy;
                                <script>
                                document.write(new Date().getFullYear());
                                </script> All rights reserved | This template is made with <i class="icon-heart"
                                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer1
