const express = require("express");
const router = express.Router();

const controller = require("../controller");
const tableController = require("../controller/tableController");
const formController = require("../controller/formController");
const dashboardController = require("../controller/dashboardController");
const CRPProfileController =require("../controller/CRPProfileController");
const cheackerController = require("../controller/cheackerController");
const inActiveController = require("../controller/inActiveController");
const cstController =require("../controller/cstController");
const dbUpdateController = require("../controller/dbController");
const memberController = require("../controller/memberController")
const nrlmController = require ("../controller/NrlmController")
const shgController = require("../controller/shgController");

router.get("/shg/districts",controller.getAllDistricts);
// router.get("/shg/:district",controller.getDistrictData);
router.get("/shg/:district/stats",controller.getDistrictStats);

router.get("/dashboard/:district",dashboardController.getDistrictData);
router.get("/dashboard/:district/stats",dashboardController.getDistrictStats);

router.get("/",tableController.view)
router.get("/table/unique/:uniqueCategory",tableController.getUniqueCategories)
router.get('/table/consolidatedDistrict',tableController.getConsolidatedDistrict)
router.get(`/table/consolidatedBanks`,tableController.getConsolidatedBanks)
router.get(`/table/consolidatedFormation`, tableController.getConsolidatedFormation);
router.get(`/table/consolidatedPLF`, tableController.getConsolidatedPlfData);
router.get(`/table/consolidatedAudit`,tableController.getConsolidatedAuditData);
router.get(`/table/financeAssist/:type`,tableController.getFinanceAssistData);
router.get(`/table/bankLinkage`,tableController.getBankLinkageData);
router.get('/table/banksInfo',tableController.getBanksInfo);
router.get(`/table/shgAge`,tableController.getShgAge);
router.get("/table/members",tableController.getShgMembers);
router.get("/table/keyBased/:category",tableController.getKeyCategory);
router.get("/table/multiCol/:category",tableController.getShgCategory);

router.get("/form/values",formController.getDistrictData)
router.get("/get-projects-shg",formController.getProjectsshg)
router.get("/get-branch",formController.getBranch)
router.get("/form/values/get-panchayat",formController.getPanjayat)
router.get("/form/values/shg",formController.getShgData)

router.post("/form/shg",shgController.addShg)
router.post("/form/shg/member",formController.addShgMember)

router.get("/form/shg",formController.getShgs)//get old shg list
router.get("/form/shg/newdata",formController.getShgsNewlist)//new data shg list
router.get("/form/shg/member/approvedlist",formController.getShgMembers)//approved list old
router.get("/form/shg/member/approvedlist/newdata",formController.getShgMembersnewlist)//approved list new list member

// getShgNamelist
router.get("/form/shg/NameList",formController.getShgNamelist)

router.get("/form/shg/pending",formController.getShgsPending)
router.get("/get-bank_details",formController.getBankdetail)
router.get("/form/shg/memberspending",formController.getShgMembersPending)//pending list

router.get("/form/shg/:SHGId",formController.getShg)
router.get("/form/shg/member/:MemberId",formController.getShgMember)

router.delete("/form/shg/:SHGId",formController.deleteShg)
router.delete("/form/shg/member/:MemberId",formController.deleteShgMember)

router.put("/form/shg",formController.updateShg)
router.put("/form/shg/member",formController.updateShgMember)
router.put("/form/shg/incomplete/member",formController.updateSaveShgMember)

router.get("/crpprofile/shg",CRPProfileController.getAutoFill)
router.get("/form/bank-details/:IFSCCode",formController.getBankdetails)
router.get("/form/bank-details",formController.getallBankdetails)

router.get("/validation/aadhar/:AADHAR",formController.aadharValidate)
router.get("/validation/smartcard/:smartCard",formController.smartCardValidate)
router.get("/validation/contact/:contact",formController.contactValidate);
router.post("/validation/bankDetails",formController.bankValidate)   
router.get("/validation/bankdetail/Member",formController.bankValidateMember)

router.get("/approved/count",cheackerController.getApprovedCount)//shg approved count
router.get("/approved/list",cheackerController.getApprovedList)//SHG APPROVE SEND PANURATHU
router.get("/getupdated/shg",cheackerController.getUpdatedshg);
router.get("/get/shg/view",shgController.shgView);

router.get("/memberlist/member",cheackerController.getMemberList)//3
router.get("/memberapproved/count",cheackerController.getmemberApprovedCount)//member approved count
router.get("/cst/approved/count",cheackerController.getcstApprovedCount)//cst approved count
// shg accept and reject
// router.post("/accepted/shg",cheackerController.Acceptshg)
router.post("/accepted/shg",cheackerController.Acceptshg1)
router.post("/newUser/accept/shg",cheackerController.Acceptnewusershg)
router.post("/reject/shg",cheackerController.rejectshg)
router.get("/reject/shg",cheackerController.rejectshgList)
// router.get("/updates/shg",cheackerController.updatesshgList)
// shgmember accept and reject
router.post("/accepted/shgmember",cheackerController.AcceptshgMember)
router.post("/newUser/accept/shgmember",cheackerController.Acceptnewusershgmember)
router.post("/reject/shgmember",cheackerController.rejectshgmember)
router.get("/reject/shgmember",cheackerController.rejectmemberList)

// incompleted shg
router.post("/incompleted/shg",cheackerController.inCompletedShg)
router.post("/send-approved/shg",cheackerController.getApproved);
router.get("/get/incompleted/shg/list",cheackerController.getincompletedShgList)//incompleted shg list
router.put("/update/incompleted/shg",cheackerController.updateInCompletedShg)//update incompleted shg 
router.get("/aadhar-verify/:Aadharnumber",cheackerController.aadharverify)//update incompleted shg 
// incompleted shgmember
router.get("/get/incompleted/shg/:Id",cheackerController.getincompletedShg)//get shgid
router.get("/get/incompleted/shgmember",cheackerController.getinCompletedSHGmember)
router.put("/update/incompleted/shgMember",cheackerController.updateInCompletedShgMember)                                                                                  //update incompleted shg member
// getlistmember
router.get("/list/members",cheackerController.getlistMember)//get memberlist
router.get("/getupdated/shgMember",cheackerController.getUpdatedshgmember)
router.get("/shg/member/view",memberController.getshgmemberData)
router.get("/shg/member/memberlist",memberController.getMemberList)
// inActive 
router.get("/get/inactive/shg",inActiveController.getinActiveList)//inactive (approved)
router.post("/reject/inactive/shg",inActiveController.InActiveShg)//shg inactive
router.post("/shg/inactive/reject",inActiveController.InActiveRejectShg)//shg inactive
router.get("/get/inactive/Member",inActiveController.getinActiveListMember)//inactive shgmember list
router.post("/reject/inactive/member",inActiveController.InActiveMember)//Member inactive Reject
router.post("/Approved/Active/Member",inActiveController.ApprovedInActiveMember)//approved active member
router.post("/Approved/Active/shg",inActiveController.ApprovedInActiveshg)//approved inactive shg
router.get("/shg/inactive/unapprovedlist",inActiveController.getunApprovedListshg)//unapproved inactive shg
router.get("/shg/inactivecategory",cheackerController.getInactiveLists)//unapproved inactive shg
router.get("/shg/member/inactivecategory",memberController.getInactiveList)//unapproved inactive shg
router.get("/member/inactive/unapprovedlist",inActiveController.getunApprovedListmember)//unapproved inactive member

// get reject list shg & member in active
router.get("/get/rejectList/Shg",cheackerController.getrejectListShg)
router.get("/get/rejectList/Shgmember",cheackerController.getrejectListShgmember)

// get reject list shg & member in active
router.get("/get/updateList/Shg",cheackerController.getrejectListShg) 

router.get("/form/member/memberlist/:SHGId",formController.getShgMemberlistshgid)//get shgid
router.get("/form/member/memberlist/:Id",formController.getShgMemberlistid)//get id
router.post("/upload",formController.uploadfilesdata)
router.post("/upload1",formController.uploadfilesdata1)

router.post("/form/shg/inactive/maker",inActiveController.InActiveShgmaker)
router.post("/form/member/inactive/maker",inActiveController.InActiveMembermaker)
// cst
router.get("/form/test",cstController.getTest)// get cst list
router.get("/form/cst",cstController.getCST)// get cst list
router.get("/form/cst/pending",cstController.getPendingCST)// get cst list
router.get("/form/cst/id/:MemberId",cstController.getCSTs)// get specific cst details
router.get("/form/cst/reject",cstController.getRejectCST)// get cst list
router.post("/form/cst",cstController.addcst)//add cst
router.post("/form/cst/approve",cstController.approveCST)//add cst
router.post("/form/cst/inactive",cstController.inactiveCST)//inactive cst
router.get("/form/cst/inactive",cstController.getInactiveUnapproved)//inactive un approved cst
router.post("/form/cst/inactive/approved",cstController.inactiveCSTApprove)//inactive approved cst
router.get("/form/cst/inactive/approved",cstController.getInactiveApproved)//inactive approved cst
router.post("/form/cst/inactive/reject",cstController.inactiveCSTReject)//Inactive Reject
router.get("/form/cst/inactive/reject",cstController.getInactiveReject)//Inactive Reject list
router.put("/form/cst/update",cstController.updateCST)//Inactive Reject list

router.get('/find-member/:memberId',cstController.getCSTForMember);//memberid find name contct
router.post("/cst1",cstController.addcst1)// update membid to pass all shgid
router.get("/cst/shg-list", cstController.shgList);

/* DB UPDATE QUERY */
router.get('/shgdbUpdate', dbUpdateController.updateSHGHostData)
// NRLM
router.get('/nrlm/shg',nrlmController.getShgs)
router.get('/nrlm/shg/member',nrlmController.getShgMembers)
router.put('/nrlm/shg/member',nrlmController.updateShgMember)
router.get('/nrlm/shg/member/:membercode',nrlmController.getShgMember);
router.get("/nrlm/validation/aadhar/:aadhar",nrlmController.aadharValidate)
router.get("/nrlm/validation/smartcard/:smartCard",nrlmController.smartCardValidate)
router.get("/nrlm/validation/contact/:contact",nrlmController.contactValidate);
router.get("/nrlm/report",nrlmController.reportCount);
router.get("/nrlm/report-table",nrlmController.reportsList);


/* MEMBER VERIFICATION */
router.post("/verification/member", memberController.memberVerification);

module.exports = router; 