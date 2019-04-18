import db from '../models/index';

const { Department } = db;

/**
 * controller to fetch all departments 
 */
class DepartmentController {
  /**
   * @description Fetches departments
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * 
   * @return { json }  message
   */
  static getDepartments(req, res) {
    Department
    .findAll()
    .then((departments) => {
      return res.status(200)
        .json({
          departments
        })
    })
    .catch((err) => {
      res.status(500)
      .json({
        message: 'internal server error',
        err
      })
    })
  } 
}




export default DepartmentController;