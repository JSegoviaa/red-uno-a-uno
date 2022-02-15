import styles from "./FormDesign.module.css";

interface Props {
  steps: number;
  editar?: boolean;
}

const Steps = ({ steps, editar }: Props) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-8">
      <div className="col-12 my-4">
        <div
          className={
            steps === 1
              ? styles.stepLineActive1
              : steps === 2
              ? editar
                ? styles.stepLineActive3
                : styles.stepLineActive2
              : steps === 3
              ? styles.stepLineActive3
              : ""
          }
        />
        <div className={styles.stepLineInactive} />
        <div className="row d-flex justify-content-between text-center">
          <div className="col-4">
            <span className={styles.step1}>1</span>
          </div>
          <div className="col-4">
            <span
              className={
                steps === 2
                  ? styles.step1
                  : steps === 3
                  ? styles.step1
                  : styles.step2
              }
            >
              2
            </span>
          </div>
          {!editar ? (
            <div className="col-4">
              <span className={steps === 3 ? styles.step1 : styles.step3}>
                3
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Steps;
