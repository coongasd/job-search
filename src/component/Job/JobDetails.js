import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleJob, jobApply } from '../../Redux/Action/JobAction';
import Header_CvCreate from '../CV_Create/Header_CvCreate'
import moment from "moment";
import Toast from '../Toast';
import { toast } from 'react-toastify'
function JobDetails() {
    const dispatch = useDispatch();
    const id = useParams();

    const {job} = useSelector((state) => state.getSingleJob);
    const [moneyExpect, setMoneyExpect] = useState("");
    const [timeToComplete,setTimeToComplete] = useState("");
    const {success}  = useSelector((state) => state.jobApply);
 
    const userLogin = useSelector((state) => state.userLogin)
    const  {userInfo} = userLogin;
   
    

    //get current time
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // const found  = job?.offers?.find((element) => {
    //     if(element.users.userInfo._id === userInfo?._id)
    //     {
    //         return true;
    //     }
    // })
    
    // if user applied this job, they cant apply again
    const found  = job?.offers?.map((e) => {
        if(e.users.userInfo._id === userInfo?._id){
            return true
        }
        else{
            return false
        }
    })
    const applied = found?.some((e) => e === true)
    
    // if this job was post by user, they cant apply
    const postOwnerId = job?.user?.userInfo?._id;

    const ownerCheck = postOwnerId === userInfo?._id ? true : false;
    
    useEffect(() => {
        dispatch(getSingleJob(id?.id))
        if(success){
            window.location.reload()
        }
    },[id,dispatch,success])

    const applyHandler =  (e) => {
       e.preventDefault();
        dispatch(
            jobApply(id?.id,
        {
            users:{userInfo},
            moneyExpect:moneyExpect,
            applyTime: dateTime,
            timeToComplete: timeToComplete

        }))
        if (!toast.isActive(ToastId.current)) {
            ToastId.current = toast.success("N???p CV th??nh c??ng", ToastObject);
      
        }
      
      }
      const ToastId = React.useRef(null);
      const ToastObject = {
          pauseOnFocusLoss: false,
          draggable: false,
          pauseOnHover: false,
          autoClose: 200,
  
  
      }

    return (
        <div className='main-content'>
            <Header_CvCreate />
            <Toast />
            <div className='container flex'>
                <div className='left-content ml-10 my-5 w-2/4 text-left'>
                    <div className='job-requirement'>
                        <h2 className='job-title text-2xl font-bold float-left mb-5'>{job?.jobTitle}</h2><br/><br/><br/><br/>
                        <span className='float-left bg-gray-300 p-2 '>
                            D???ch v??? c???n thu??: <b className='text-sky-600 cursor-pointer'>{job?.jobField} </b>
                        </span><br/><br/>
                        <div className='mt-5'>
                            {job?.detailRequirement}
                        </div>
                    </div>
                    <div className='send-profile mt-5 bg-gray-200 p-3 rounded'>
                        <form onSubmit={applyHandler}>
                            <h2 className='font-bold text-2xl '>TH??NG TIN CH??O GI??</h2>
                            <hr class="border"></hr>
                            <div>
                                <div class="span5">
                                    <div class="block-amount vlance_jobbundle_bidtype_amount">
                                        <label class="title-in-form">????? XU???T CHI PH??<span class="text-red">*</span></label>
                                        <div class="block-amount-detail">
                                            <div className="flex gap-9 mt-3 border w-full p-3 bg-slate-300 rounded">
                                                <dt class="block-amount-label price">
                                                    B???n mu???n nh???n </dt>
                                                <dd class="block-amount-price">
                                                    <div class="input-append border rounded p-2 bg-white ">
                                                        <input  onChange={(e) => setMoneyExpect(e.target.value)} style={{outline: "none"}} id="vlance_jobbundle_bidtype_customers_pay" className="" autocomplet="off" type="text" pattern="^(0|[1-9][0-9/.]*)$" disabled="" placeholder="2.700.000" required />
                                                        <span class="add-on bonus">VN??</span>
                                                    </div>
                                                </dd>
                                            </div>
                                    
                                        
                                        
                                        </div>
                                    </div>
                                    <div class="form-text block-duration mt-2">
                                        <label class="title-in-form">D??? KI???N HO??N TH??NH TRONG<span class="text-red">*</span></label><br/>
                                        <select onChange={(e) => setTimeToComplete(e.target.value)} id="vlance_jobbundle_bidtype_duration" name="vlance_jobbundle_bidtype[duration]" required="required"  placeholder="v?? d???: 14" className="w-1/2 p-2 row-fluid span12 valid">
                                            <option value="1">1 Ng??y</option>
                                            <option value="2">2 Ng??y</option>
                                            <option value="3" selected="selected">3 Ng??y</option>
                                            <option value="5">5 Ng??y</option>
                                            <option value="7">7 Ng??y</option>
                                            <option value="10">10 Ng??y</option>
                                            <option value="14">2 Tu???n</option>
                                            <option value="21">3 Tu???n</option>
                                            <option value="28">4 Tu???n</option>
                                            <option value="42">6 Tu???n</option></select>
                                    </div>
                                </div>
                            </div>
                            {
                                ownerCheck && (<> <button className="m-0 bg-black mt-4" disabled>????y l?? vi???c do b???n ????ng</button></>)  || (
                                    applied &&(<>
                                        <button className="m-0 bg-black mt-4" disabled>B???n ???? g???i ch??o gi??</button>
                                    </>) ||  <button className="m-0 bg-amber-600 mt-4">G???i ch??o gi??</button>
                                )
                            }
                            
                           
                        </form>
                       
                    </div>


                </div>
                <div className=' right-content project-box w-1/2 mt-1 p-3 border shadow-md'>
                    <b className="float-left text-xl">Th??ng tin d??? ??n</b><br /><br />
                    <div class="description-job">

                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>ID d??? ??n</dt>
                            <dd className=''>{job?._id}</dd>
                        </div>
                        <div className='flex gap-20 justify-start mb-2'><dt>Ng??y ????ng</dt>
                            <dd className='ml-1'>
                                { moment(job?.createdAt).format('l')} </dd></div>
                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>Th???i gian tuy???n</dt>
                            <dd className='ml-7'>{job?.projectInfo?.limitTime}</dd>
                        </div>
                        <div className='flex gap-20 justify-start mb-2'>   <dt>?????a ??i???m</dt>
                            <dd className='ml-5'>
                                TP. H??? Ch?? Minh </dd></div>
                        <div className='flex w-full gap-20 justify-start mb-2'><dt>Ng??n s??ch</dt>
                            <dd className='ml-2'>
                                {job?.projectInfo?.budget} </dd> </div>
                        <div className='flex gap-20 justify-start mb-2'><dt>H??nh th???c l??m vi???c</dt>
                            <dd>
                                {job?.projectInfo?.workingForm} </dd></div>
                        <div className='flex gap-20 justify-start mb-2'> <dt>H??nh th???c tr??? l????ng</dt>
                            <dd>
                                {job?.projectInfo?.salaryPaymentMethod}</dd></div>


                    </div>
                    <b className="float-left text-xl">Th??ng tin kh??ch h??ng</b><br /><br />
                    <div className='user-description'>
                        <div className='ml-2 flex gap-8'>
                            <img src="images/user.png" alt="user" />
                            <p className='text-sky-500'>{job?.user?.userInfo?.name}</p>

                        </div>
                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>?????n t???</dt>
                            <dd>
                                TP. H??? Ch?? Minh </dd></div>
                    </div>
                    <div className='flex gap-20 justify-start mb-2'>
                        <dt>Tham gia v??o</dt>
                        <dd>
                            { moment(job?.user?.userInfo?.created).format('l')} 
                        </dd>
                    </div>
                    <button className='mx-0 my-3 w-full bg-amber-600'>Li??n h??? tr???c ti???p</button>
                </div>
            </div>
        </div>


    )
}

export default JobDetails