package hello.itemservice.web.validation;

import hello.itemservice.domain.item.Item;
import hello.itemservice.domain.item.ItemRepository;
import hello.itemservice.domain.item.SaveCheck;
import hello.itemservice.domain.item.UpdateCheck;
import hello.itemservice.web.validation.form.ItemSaveForm;
import hello.itemservice.web.validation.form.ItemUpdateForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/validation/v4/items")
@RequiredArgsConstructor
public class ValidationItemControllerV4 {

    private final ItemRepository itemRepository;

    @GetMapping
    public String items(Model model) {
        List<Item> items = itemRepository.findAll();
        model.addAttribute("items", items);
        return "validation/v4/items";
    }

    @GetMapping("/{itemId}")
    public String item(@PathVariable long itemId, Model model) {
        Item item = itemRepository.findById(itemId);
        model.addAttribute("item", item);
        return "validation/v4/item";
    }

    @GetMapping("/add")
    public String addForm(Model model) {
        model.addAttribute("item", new ItemSaveForm());
        return "validation/v4/addForm";
    }

//    @PostMapping("/add")
    public String addItem(@Validated @ModelAttribute("item") ItemSaveForm item, BindingResult bindingResult, RedirectAttributes redirectAttributes, Model model) {

        if(item.getPrice()!=null&&item.getQuantity()!=null){
            int resultPrice = item.getPrice()*item.getQuantity();
            if(resultPrice<10000){
                bindingResult.reject("totalPriceMin",new Object[]{10000,resultPrice},null);
            }
        }

        //검증에 실패하면 다시 입력 폼으로
        if (bindingResult.hasErrors()) {
            log.info("bindingResult = {}", bindingResult);
            return "validation/v4/addForm";
        }

        //성공 로직
        Item saveItem = new Item();
        saveItem.setItemName(item.getItemName());
        saveItem.setPrice(item.getPrice());
        saveItem.setQuantity(item.getQuantity());

        Item savedItem = itemRepository.save(saveItem);
        redirectAttributes.addAttribute("itemId", savedItem.getId());
        redirectAttributes.addAttribute("status", true);
        return "redirect:/validation/v4/items/{itemId}";
    }
    @PostMapping("/add")
    public String addItem2(@Validated @ModelAttribute("item") ItemSaveForm item, BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        if(item.getPrice()!=null&&item.getQuantity()!=null){
            int resultPrice = item.getPrice()*item.getQuantity();
            if(resultPrice<10000){
                bindingResult.reject("totalPriceMin",new Object[]{10000,resultPrice},null);
            }
        }

        //검증에 실패하면 다시 입력 폼으로
        if (bindingResult.hasErrors()) {
            log.info("bindingResult = {}", bindingResult);
            return "validation/v4/addForm";
        }

        //성공 로직
        Item saveItem = new Item();
        saveItem.setItemName(item.getItemName());
        saveItem.setQuantity(item.getQuantity());
        saveItem.setPrice(item.getPrice());
        Item savedItem = itemRepository.save(saveItem);
        redirectAttributes.addAttribute("itemId", savedItem.getId());
        redirectAttributes.addAttribute("status", true);
        return "redirect:/validation/v4/items/{itemId}";
    }



    @GetMapping("/{itemId}/edit")
    public String editForm(@PathVariable Long itemId, Model model) {
        Item item = itemRepository.findById(itemId);
        ItemUpdateForm form = new ItemUpdateForm();
        form.setId(item.getId());
        form.setItemName(item.getItemName());
        form.setPrice(item.getPrice());
        form.setQuantity(item.getQuantity());
        model.addAttribute("item", form);
        return "validation/v4/editForm";
    }

//    @PostMapping("/{itemId}/edit")
    public String edit(@PathVariable Long itemId, @Validated @ModelAttribute Item item,BindingResult bindingResult) {
        if(item.getPrice()!=null&&item.getQuantity()!=null){
            int resultPrice=item.getPrice()*item.getQuantity();
            if(resultPrice<10000){
                bindingResult.reject("totalPriceMin",new Object[]{10000,resultPrice},null);
            }
        }

        if(bindingResult.hasErrors()){
            log.info("errors={}",bindingResult);
            return "validation/v4/editForm";
        }

        itemRepository.update(itemId, item);
        return "redirect:/validation/v4/items/{itemId}";
    }
    @PostMapping("/{itemId}/edit")
    public String editV2(@PathVariable Long itemId, @Validated @ModelAttribute("item") ItemUpdateForm item, BindingResult bindingResult) {
        if(item.getPrice()!=null&&item.getQuantity()!=null){
            int resultPrice=item.getPrice()*item.getQuantity();
            if(resultPrice<10000){
                bindingResult.reject("totalPriceMin",new Object[]{10000,resultPrice},null);
            }
        }

        if(bindingResult.hasErrors()){
            log.info("errors={}",bindingResult);
            return "validation/v4/editForm";
        }

        Item updateItem = new Item();
        updateItem.setItemName(item.getItemName());
        updateItem.setPrice(item.getPrice());
        updateItem.setQuantity(item.getQuantity());

        itemRepository.update(itemId, updateItem);
        return "redirect:/validation/v4/items/{itemId}";
    }

}

