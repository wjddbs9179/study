package hellojpa;

import javax.persistence.Embeddable;
import java.time.LocalDateTime;
@Embeddable
public class Period {

    //기간 Period
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    public boolean isWork(){
        return endDate.isAfter(LocalDateTime.now());
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }
}
