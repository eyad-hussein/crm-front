import addCustomer from "./customer/addCustomer";
import getCountries from "./country/getCountries";
import getUsers from "./user/getUsers";
import getIndustries from "./industry/getIndustries";
import createCustomer from "./customer/createCustomer";
import putCustomer from "./customer/putCustomer";
import patchCustomer from "./customer/patchCustomer";
import getCustomer from "./customer/getCustomer";
import patchCustomerStatus from "./customer/patchCustomerStatus";
import getCities from "./city/getCities";
import getStates from "./state/getStates";
import deleteCustomer from "./customer/deleteCustomer";
import getCustomersBasedOnStatus from "./customer/getCustomersBasedOnStatus";
import getProspects from "./prospect/getProspects";
import searchForCustomers from "./customer/searchForCustomers";
import searchForUsers from "./user/searchForUsers";
import filterCustomers from "./customer/filterCustomers";
import deleteActivity from "./activity/deleteActivity";
import getActivitesByCustomerId from "./activity/getActivitiesByCustomerId";
import getActivitesByUserId from "./activity/getActivitiesByUserId";
import patchActivity from "./activity/patchActivity";
import createActivity from "./activity/createActivity";
import getExtensions from "./extension/getExtensions";
import getStatesByCountryId from "./state/getStatesByCountryId";
import getCitiesByStateId from "./city/getCitiesByStateId";
import sortCustomers from "./customer/sortCustomers";
import createTask from "./task/createTask";
import createNote from "./note/createNote";
import getUserById from "./user/getUserById";
import login from "./auth/login";
import register from "./auth/register";
import getServices from "./service/getServices";
import deleteTask from "./task/deleteTask";
import getPackages from "./package/getPackages";
import getProposals from "./proposal/getProposals";
import getFollowUps from "./follow-up/getFollowUps";
import getClosures from "./closures/getProposals";

export {
  addCustomer,
  getCountries,
  getUsers,
  getIndustries,
  createCustomer,
  putCustomer,
  patchCustomer,
  getCustomer,
  patchCustomerStatus,
  getCities,
  getStates,
  deleteCustomer,
  getCustomersBasedOnStatus,
  getProspects,
  searchForCustomers,
  filterCustomers,
  deleteActivity,
  getActivitesByCustomerId,
  getActivitesByUserId,
  patchActivity,
  createActivity,
  getExtensions,
  getStatesByCountryId,
  getCitiesByStateId,
  sortCustomers,
  createTask,
  createNote,
  getUserById,
  searchForUsers,
  login,
  register,
  getServices,
  deleteTask,
  getPackages,
  getClosures,
  getFollowUps,
  getProposals,
};
