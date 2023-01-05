import React from "react";
import { connect } from "react-redux";
import Dropdown from "../../AdminComponents/Dropdown/Dropdown";
import InputArea from "../../AdminComponents/InputArea/InputArea";
import Inputbox from "../../AdminComponents/Inputbox/Inputbox";
import { news_data } from "../../Data/News_data";

import "./DevProAdmin.scss";

// prettier-ignore
function DevProAdmin({ sidebarshow, ...props }) {

    const { admin, adminInsert } = props

    return (
        <div className={`devproadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>DevPro</h3>
                <hr className="line_hr" />
            </div>
            {/* ----------------- DevPro Title section -------------------- */}
            <div className="devprotitle_sections">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                            <div className="phrase_title">
                                <Inputbox name="title" type='text' defaultValue={admin?.devpro.phrase.title} placeholder="Type Here" 
                                    onChange={(e) => 
                                        adminInsert({
                                            ...admin,
                                            devpro: {
                                                ...admin.devpro,
                                                phrase: {
                                                    ...admin.devpro.phrase,
                                                    title: e.target.value
                                                }
                                            }
                                        })
                                    } 
                                />
                            </div>
                            <InputArea name='Phrase Description' type='text' defaultValue={admin?.devpro.phrase.description} placeholder='Type Here' rows={5}
                                onChange={(e) => {
                                    adminInsert({
                                        ...admin,
                                        devpro: {
                                            ...admin.devpro,
                                            phrase: {
                                                ...admin.devpro.phrase,
                                                description: e.target.value
                                            }
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- DevPro Add button -------------------- */}
            <div>
                <button className="btn add_btn"
                    // onClick={(e) => {
                    //     // admin.home.services.push("")
                    //     var addupd = {
                    //         ...admin,
                    //         news: {
                    //             ...admin.news,
                    //             productservices: [...admin.news.productservices, ""],
                    //         }
                    //     }
                    //     adminInsert(addupd)
                    // }} 
                >Add DevPro</button>
                {/* ----------------- DevPro All DropDown -------------------- */}
                <div>
                    {
                        news_data?.map((news, index) => 
                            <Dropdown key={index} id={news.id} title={news.title} desc={news.desc} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminInsert: (val) => {
            dispatch({
                type: "ADMIN",
                item: val,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevProAdmin);
